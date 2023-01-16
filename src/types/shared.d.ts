export type availableLangCodes = 'en' | 'ja' | 'zh';
export type AvailableParserVariableType = string | number | boolean | object;

export interface ParserExpressionOptions {
    forceReturnVariableName?: boolean;
    rawAddQuote?: boolean;
}

export interface Translations {
    title: string;
    search: string;
    tags: string;
}

export interface DictItem {
    title: string | null;
    tags: string[] | null;
    category: string | null;
    content: string | null;
    link: string | null;
}