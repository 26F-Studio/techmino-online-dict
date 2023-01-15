import {
    BinaryExpression,
    Expression,
    LogicalExpression,
    MemberExpression,
    parse as parseLua,
    TableConstructorExpression
} from "luaparse";

function preg_replace_callback<T extends string>(v: T, p: RegExp, cb: (m: RegExpMatchArray) => T) {
    [...v.matchAll(p)].forEach(value => {
        v = v.replace(value[0], cb(value)) as T;
    });

    return v;
}

function processRaw(v: string | undefined, addQuote = true) {
    if (!v) {
        return null;
    }

    let result = preg_replace_callback(v.slice(1, -1), /\\(\d+)/g, m => {
        return String.fromCharCode(m[1] as unknown as number);
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

export function parse(code: string) {
    const items = new Array<string[]>;

    const variables = {
        FNNS: false,
        'CHAR.mino.T': '123'
    } as Record<string, unknown>;

    const ast = parseLua(code);

    ast.body.forEach(chunk => {
        switch (chunk.type) {
            case 'LocalStatement':
                chunk.variables.forEach(function ({name}, i) {
                    const v = chunk.init[i] as { raw: string };
                    variables[name] = processRaw(v.raw)!;
                });
                break;
            case 'ReturnStatement':
                chunk.arguments.forEach(chunk => {
                    switch (chunk.type) {
                        case 'TableConstructorExpression':

                        function parseTable(chunk: TableConstructorExpression): void {
                            const temp = new Array<string>;

                            function parseLogic(expression: LogicalExpression) {
                                const logicCodeTemp = new Array<string>;

                                (function handleLogicPart(e: LogicalExpression): void {
                                    function checkAndConvertCode(e: Expression) {
                                        switch (e.type) {
                                            case 'LogicalExpression':
                                                handleLogicPart(e);
                                                break;
                                            case 'Identifier':
                                                logicCodeTemp.push(variables[e.name] as string);
                                                break;
                                            case 'StringLiteral':
                                                logicCodeTemp.push(processRaw(e.raw)!);
                                                break;
                                            default:
                                                throw new Error(`Unknown type: ${e.type}`);
                                        }
                                    }

                                    checkAndConvertCode(e.left);

                                    switch (e.operator) {
                                        case 'and':
                                            logicCodeTemp.push('&&');
                                            break;
                                        case 'or':
                                            logicCodeTemp.push('||');
                                            break;
                                        default:
                                            throw new Error(`Unknown operator: ${e.operator}`);
                                    }

                                    checkAndConvertCode(e.right);
                                })(expression);

                                const code = '() => ' + logicCodeTemp.join(' ') + ';';
                                const result = eval(code)();

                                temp.push(result);
                            }

                            function processBinary(expression: BinaryExpression) {
                                const binaryTemp = new Array<string>;

                                (function handleBinaryPart(e: BinaryExpression): void {
                                    function processMember(e: MemberExpression) {
                                        const tempVarTemp = new Array<string>;

                                        (function handleMemberPart(e: MemberExpression): void {
                                            function checkAndConvertCode(e: Expression) {
                                                switch (e.type) {
                                                    case 'BinaryExpression':
                                                        handleBinaryPart(e);
                                                        break;
                                                    case 'MemberExpression':
                                                        handleMemberPart(e);
                                                        break;
                                                    case 'Identifier':
                                                        tempVarTemp.push(e.name);
                                                        break;
                                                    case 'StringLiteral':
                                                        tempVarTemp.push(processRaw(e.raw)!);
                                                        break;
                                                    default:
                                                        throw new Error(`Unknown type: ${e.type}`);
                                                }
                                            }

                                            checkAndConvertCode(e.base);
                                            checkAndConvertCode(e.identifier);
                                        })(e);

                                        const content = tempVarTemp.join('.');
                                        binaryTemp.push(variables[content] as string);
                                    }

                                    function checkAndConvertCode(e: Expression) {
                                        switch (e.type) {
                                            case 'BinaryExpression':
                                                handleBinaryPart(e);
                                                break;
                                            case 'MemberExpression':
                                                processMember(e);
                                                break;
                                            case 'Identifier':
                                                binaryTemp.push(variables[e.name] as string);
                                                break;
                                            case 'StringLiteral':
                                                binaryTemp.push(processRaw(e.raw)!);
                                                break;
                                            default:
                                                throw new Error(`Unknown type: ${e.type}`);
                                        }
                                    }

                                    checkAndConvertCode(e.left);
                                    checkAndConvertCode(e.right);
                                })(expression);

                                const content = binaryTemp.join('');
                                temp.push(content);
                            }

                            chunk.fields.forEach(item => {
                                switch (item.value.type) {
                                    case 'TableConstructorExpression':
                                        parseTable(item.value);
                                        break;
                                    case 'StringLiteral':
                                        temp.push(processRaw(item.value.raw)!);
                                        break;
                                    case 'LogicalExpression':
                                        parseLogic(item.value);
                                        break;
                                    case 'BinaryExpression':
                                        processBinary(item.value);
                                        break;
                                    default:
                                        throw new Error('Unknown type: ' + item.value.type)
                                }
                            });

                            items.push(temp);
                        }

                            parseTable(chunk);
                            break;
                        default:
                            throw new Error(`Unknown type: ${chunk.type}`);
                    }
                });
                break;
            default:
                throw new Error(`Unknown type: ${chunk.type}`);
        }
    });

    return items.filter(v => v.length > 0)
            .map(item => {
                return {
                    title: processRaw(item[0], false),
                    tags: processRaw(item[1], false),
                    category: processRaw(item[2], false),
                    content: processRaw(item[3], false),
                    link: processRaw(item[4], false)
                }
            });
}