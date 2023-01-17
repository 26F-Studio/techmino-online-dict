import {Expression, parse as parseLua, Statement} from "luaparse";
import {preg_replace_callback} from "@/core/utils";
import {AvailableParserVariableType, DictItem, ParserExpressionOptions} from "@/types/shared";
import {get, has} from "lodash-es";
import {chars} from "@/core/char";

export class Parser {
    protected variables = {
        CHAR: chars,
        FNNS: false
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

        if (v.startsWith('"')) {
            v = v.slice(1);
        }

        if (v.endsWith('"')) {
            v = v.slice(0, -1);
        }

        let result = preg_replace_callback(v, /\\(\d+)/g, m => {
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

    protected processVariable(name: string, executeFunction = true) {
        if (!has(this.variables, name)) {
            return name;
        }

        const content = get(this.variables, name);

        switch (typeof content) {
            case 'object':
                return name;
            case 'function':
                return content();
            default:
                return content;
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

                return this.processVariable(temp.flat().join(''), options.executeIdentifierFunction);
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

                const code = temp.join(' ');
                return eval('() => ' + code)();
            case 'Identifier':
                if (!has(that.variables, expression.name) || options.forceReturnVariableName) {
                    return expression.name;
                }

                return this.processVariable(expression.name, options.executeIdentifierFunction);
            case 'StringLiteral':
                return that.processRaw(expression.raw, options.rawAddQuote ?? true)!;
            default:
                throw new Error(`Unknown expression: ${expression.type}`);
        }
    }
}