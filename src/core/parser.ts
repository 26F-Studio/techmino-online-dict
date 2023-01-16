import {Expression, parse as parseLua, Statement} from "luaparse";
import {preg_replace_callback} from "@/core/utils";
import {AvailableParserVariableType, DictItem, ParserExpressionOptions} from "@/types/shared";
import {get} from "lodash-es";
import {blockStyle} from "@/core/shared";

export class Parser {
    protected variables = {
        FNNS: false,
        CHAR: {
            mino: {
                Z: `<i class="${blockStyle} mino Z"/>`,
                S: `<i class="${blockStyle} mino S"/>`,
                J: `<i class="${blockStyle} mino J"/>`,
                L: `<i class="${blockStyle} mino L"/>`,
                T: `<i class="${blockStyle} mino T"/>`,
                O: `<i class="${blockStyle} mino O"/>`,
                I: `<i class="${blockStyle} mino I"/>`,
                Z5: `<i class="${blockStyle} mino Z5"/>`,
                S5: `<i class="${blockStyle} mino S5"/>`,
                P: `<i class="${blockStyle} mino P"/>`,
                Q: `<i class="${blockStyle} mino Q"/>`,
                F: `<i class="${blockStyle} mino F"/>`,
                E: `<i class="${blockStyle} mino E"/>`,
                T5: `<i class="${blockStyle} mino T5"/>`,
                U: `<i class="${blockStyle} mino U"/>`,
                V: `<i class="${blockStyle} mino V"/>`,
                W: `<i class="${blockStyle} mino W"/>`,
                X: `<i class="${blockStyle} mino X"/>`,
                J5: `<i class="${blockStyle} mino J5"/>`,
                L5: `<i class="${blockStyle} mino L5"/>`,
                R: `<i class="${blockStyle} mino R"/>`,
                Y: `<i class="${blockStyle} mino Y"/>`,
                N: `<i class="${blockStyle} mino N"/>`,
                H: `<i class="${blockStyle} mino H"/>`,
                I5: `<i class="${blockStyle} mino I5"/>`,
                I3: `<i class="${blockStyle} mino I3"/>`,
                C: `<i class="${blockStyle} mino C"/>`,
                I2: `<i class="${blockStyle} mino I2"/>`,
                O1: `<i class="${blockStyle} mino O1"/>`
            }
        }
    } as Record<string, AvailableParserVariableType>;

    constructor(protected code: string) {
        const that = this;
        const ast = parseLua(code);

        ast.body.forEach(statement => {
            that.processStatement(statement);
        });
    }

    protected _items = new Array<string[]>;

    get items() {
        const that = this;

        return this._items.map(item => {
            return {
                title: that.processRaw(item[0], false),
                tags: that.processRaw(item[1], false)?.split(' ') ?? [],
                category: that.processRaw(item[2], false),
                content: that.processRaw(item[3], false),
                link: that.processRaw(item[4], false)
            } as DictItem;
        });
    }

    protected processRaw(v: string | undefined, addQuote = true) {
        if (!v) {
            return null;
        }

        let result = preg_replace_callback(v.slice(1, -1), /\\(\d+)/g, m => {
            return String.fromCharCode(parseInt(m[1]));
        });

        if (addQuote) {
            if (result[0] !== '"') {
                result = '"' + result;
            }

            if (result[result.length - 1] !== '"') {
                result = result + '"';
            }
        }

        return result;
    }

    protected processStatement(statement: Statement) {
        const that = this;

        switch (statement.type) {
            case 'LocalStatement':
                statement.variables.forEach(function ({name}, i) {
                    const v = statement.init[i] as { raw: string };
                    that.variables[name] = that.processRaw(v.raw)!;
                });
                break;
            case 'ReturnStatement':
                statement.arguments.forEach(expression => {
                    this.processExpression(expression);
                });
                break;
            default:
                throw new Error(`Unknown statement: ${statement.type}`);
        }
    }

    protected processExpression(expression: Expression, options: ParserExpressionOptions = {}) {
        const that = this;
        const temp = new Array<string>;

        switch (expression.type) {
            case 'TableConstructorExpression':
                expression.fields.forEach(field => {
                    temp.push(that.processExpression(field.value) as string);
                });

                if (temp.length > 0 && temp.length <= 5) {
                    this._items.push(temp);
                }

                return temp;
            case 'BinaryExpression':
                switch (expression.operator) {
                    case '..':
                        temp.push(that.processExpression(expression.left, {
                            rawAddQuote: false
                        }) as string);

                        temp.push(that.processExpression(expression.right, {
                            rawAddQuote: false
                        }) as string);
                        break;
                    default:
                        throw new Error(`Unknown operator: ${expression.operator}`)
                }

                return temp.join('');
            case 'MemberExpression':
                temp.push(that.processExpression(expression.base, {
                    forceReturnVariableName: true
                }) as string);

                temp.push(expression.indexer);

                temp.push(that.processExpression(expression.identifier, {
                    forceReturnVariableName: true
                }) as string);

                const variableName = temp.flat().join('');
                const content = get(that.variables, variableName);

                if (typeof content !== 'string') {
                    return variableName;
                }

                return content;
            case 'LogicalExpression':
                temp.push(that.processExpression(expression.left) as string);

                switch (expression.operator) {
                    case 'and':
                        temp.push('&&');
                        break;
                    case 'or':
                        temp.push('||');
                        break;
                    default:
                        throw new Error(`Unknown operator`)
                }

                temp.push(that.processExpression(expression.right) as string);
                return temp.join(' ');
            case 'Identifier':
                if (!that.variables[expression.name] || options.forceReturnVariableName) {
                    return expression.name;
                }

                return that.variables[expression.name];
            case 'StringLiteral':
                return that.processRaw(expression.raw, options.rawAddQuote ?? true)!;
            default:
                throw new Error(`Unknown expression: ${expression.type}`);
        }
    }
}