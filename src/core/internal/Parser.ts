import {Expression, parse as parseLua, Statement} from "luaparse";
import {preg_replace_callback} from "@/core/utils";
import {ParserExpressionOptions} from "@/types/shared";
import {get, has} from "lodash-es";
import Dict from "@/core/internal/Dict";

export default class Parser {
    protected variables = {
        CHAR: {
            mino: (() => {
                const _ = {} as Record<string, string>;

                ['Z', 'S', 'J', 'L', 'T', 'O', 'I', 'Z5', 'S5', 'P', 'Q', 'F', 'E', 'T5', 'U', 'V', 'W', 'X', 'J5', 'L5', 'R', 'Y', 'N', 'H', 'I5', 'I3', 'C', 'I2', 'O1']
                        .forEach(piece => {
                            _[piece] = `<i class="not-italic text-cyan-500 text-4xl mino ${piece}"></i>`;
                        });

                return _;
            })()
        },
        FNNS: /OS/i.test(navigator.userAgent) // 判断 User-Agent 是否包含 "OS"
    } as Record<string, unknown>;

    constructor(protected code: string) {

    }

    protected _items: string[][] = [];

    get items() {
        const that = this;
        this._items.pop();

        return this._items.map(item => {
            return new Dict(
                    that.processRaw(item[0], false),
                    that.processRaw(item[1], false)?.split(' ') ?? [],
                    that.processRaw(item[2], false),
                    that.processRaw(item[3], false),
                    that.processRaw(item[4], false)
            );
        });
    }

    parse() {
        const that = this;

        parseLua(this.code).body.forEach(statement => {
            that.processStatement(statement);
        });
    }

    protected processRaw(v: string | undefined, addQuote = true) {
        if (!v) {
            return null;
        }

        // 如果有引号则去掉引号

        if (v.startsWith('"')) {
            v = v.slice(1);
        }

        if (v.endsWith('"')) {
            v = v.slice(0, -1);
        }

        // 将 \ + 数字 的语法替换为字母

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
                // 保存变量

                statement.variables.forEach(function ({name}, i) {
                    const v = statement.init[i] as { raw: string };
                    that.variables[name] = that.processRaw(v.raw)!;
                });
                break;
            case 'ReturnStatement':
                // 处理返回的子项

                statement.arguments.forEach(expression => {
                    this.processExpression(expression);
                });
                break;
            default:
                throw new Error(`Unknown statement: ${statement.type}`);
        }
    }

    protected processVariable(name: string) {
        if (!has(this.variables, name)) {
            return name;
        }

        const content = get(this.variables, name);

        switch (typeof content) {
            case 'object':
                // 返回变量名

                return name;
            case 'function':
                // 返回执行结果

                return content();
            default:
                // 返回变量内容

                return content;
        }
    }

    protected wrapTableOrProcessExpression(expression: Expression) {
        const result = this.processExpression(expression, {
            rawAddQuote: true
        });

        if (expression.type === 'TableConstructorExpression') {
            return `[${result}]`
        }

        return result;
    }

    protected processExpression(expression: Expression, options: ParserExpressionOptions = {}) {
        const that = this;
        const temp: string[] = [];

        switch (expression.type) {
            case 'TableConstructorExpression':
                // 返回处理后的所有的子项

                expression.fields.forEach(field => {
                    temp.push(that.processExpression(field.value) as string);
                });

                if (temp.length > 0) {
                    this._items.push(temp);
                }

                return temp;
            case 'BinaryExpression':
                // 返回拼接后的内容

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
                // 返回拼接后的变量名

                temp.push(that.processExpression(expression.base, {
                    forceReturnVariableName: true
                }) as string);

                temp.push(expression.indexer);

                temp.push(that.processExpression(expression.identifier, {
                    forceReturnVariableName: true
                }) as string);

                return this.processVariable(temp.flat().join(''));
            case 'LogicalExpression':
                // 返回执行后的结果

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

                temp.push(...that.wrapTableOrProcessExpression(expression.right) as string);

                let code = temp.join(' ');
                return eval('() => ' + code)();
            case 'Identifier':
                // 返回变量内容 如为空则返回变量名

                if (!has(that.variables, expression.name) || options.forceReturnVariableName) {
                    return expression.name;
                }

                return this.processVariable(expression.name);
            case 'StringLiteral':
                // 返回处理后的字符串

                return that.processRaw(expression.raw, options.rawAddQuote ?? true)!;
            default:
                throw new Error(`Unknown expression: ${expression.type}`);
        }
    }
}