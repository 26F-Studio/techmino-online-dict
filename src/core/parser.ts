import {Expression, parse as parseLua, Statement} from "luaparse";
import {preg_replace_callback} from "@/core/utils";
import {AvailableParserVariableType, DictItem, ParserExpressionOptions} from "@/types/shared";
import {get} from "lodash-es";

export class Parser {
    protected variables = {
        FNNS: false,
        CHAR: {
            mino: {
                Z: '<i class="font-[proportional] block-f0040"></i>',
                S: '<i class="font-[proportional] block-f0041"></i>',
                J: '<i class="font-[proportional] block-f0042"></i>',
                L: '<i class="font-[proportional] block-f0043"></i>',
                T: '<i class="font-[proportional] block-f0044"></i>',
                O: '<i class="font-[proportional] block-f0045"></i>',
                I: '<i class="font-[proportional] block-f0046"></i>',
                Z5: '<i class="font-[proportional] block-f0047"></i>',
                S5: '<i class="font-[proportional] block-f0048"></i>',
                P: '<i class="font-[proportional] block-f0049"></i>',
                Q: '<i class="font-[proportional] block-f004a"></i>',
                F: '<i class="font-[proportional] block-f004b"></i>',
                E: '<i class="font-[proportional] block-f004c"></i>',
                T5: '<i class="font-[proportional] block-f004d"></i>',
                U: '<i class="font-[proportional] block-f004e"></i>',
                V: '<i class="font-[proportional] block-f004f"></i>',
                W: '<i class="font-[proportional] block-f0050"></i>',
                X: '<i class="font-[proportional] block-f0051"></i>',
                J5: '<i class="font-[proportional] block-f0052"></i>',
                L5: '<i class="font-[proportional] block-f0053"></i>',
                R: '<i class="font-[proportional] block-f0054"></i>',
                Y: '<i class="font-[proportional] block-f0055"></i>',
                N: '<i class="font-[proportional] block-f0056"></i>',
                H: '<i class="font-[proportional] block-f0057"></i>',
                I5: '<i class="font-[proportional] block-f0058"></i>',
                I3: '<i class="font-[proportional] block-f0059"></i>',
                C: '<i class="font-[proportional] block-f005a"></i>',
                I2: '<i class="font-[proportional] block-f005b"></i>',
                O1: '<i class="font-[proportional] block-f005c"></i>'
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