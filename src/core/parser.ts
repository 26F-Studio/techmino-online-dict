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
        'CHAR.mino.Z': '<i class="font-[proportional] block-f0040"></i>',
        'CHAR.mino.S': '<i class="font-[proportional] block-f0041"></i>',
        'CHAR.mino.J': '<i class="font-[proportional] block-f0042"></i>',
        'CHAR.mino.L': '<i class="font-[proportional] block-f0043"></i>',
        'CHAR.mino.T': '<i class="font-[proportional] block-f0044"></i>',
        'CHAR.mino.O': '<i class="font-[proportional] block-f0045"></i>',
        'CHAR.mino.I': '<i class="font-[proportional] block-f0046"></i>',
        'CHAR.mino.Z5': '<i class="font-[proportional] block-f0047"></i>',
        'CHAR.mino.S5': '<i class="font-[proportional] block-f0048"></i>',
        'CHAR.mino.P': '<i class="font-[proportional] block-f0049"></i>',
        'CHAR.mino.Q': '<i class="font-[proportional] block-f004a"></i>',
        'CHAR.mino.F': '<i class="font-[proportional] block-f004b"></i>',
        'CHAR.mino.E': '<i class="font-[proportional] block-f004c"></i>',
        'CHAR.mino.T5': '<i class="font-[proportional] block-f004d"></i>',
        'CHAR.mino.U': '<i class="font-[proportional] block-f004e"></i>',
        'CHAR.mino.V': '<i class="font-[proportional] block-f004f"></i>',
        'CHAR.mino.W': '<i class="font-[proportional] block-f0050"></i>',
        'CHAR.mino.X': '<i class="font-[proportional] block-f0051"></i>',
        'CHAR.mino.J5': '<i class="font-[proportional] block-f0052"></i>',
        'CHAR.mino.L5': '<i class="font-[proportional] block-f0053"></i>',
        'CHAR.mino.R': '<i class="font-[proportional] block-f0054"></i>',
        'CHAR.mino.Y': '<i class="font-[proportional] block-f0055"></i>',
        'CHAR.mino.N': '<i class="font-[proportional] block-f0056"></i>',
        'CHAR.mino.H': '<i class="font-[proportional] block-f0057"></i>',
        'CHAR.mino.I5': '<i class="font-[proportional] block-f0058"></i>',
        'CHAR.mino.I3': '<i class="font-[proportional] block-f0059"></i>',
        'CHAR.mino.C': '<i class="font-[proportional] block-f005a"></i>',
        'CHAR.mino.I2': '<i class="font-[proportional] block-f005b"></i>',
        'CHAR.mino.O1': '<i class="font-[proportional] block-f005c"></i>'
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