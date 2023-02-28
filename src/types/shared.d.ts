export type AvailableLangCodes = 'en' | 'ja' | 'zh';

export interface ParserExpressionOptions {
    forceReturnVariableName?: boolean;
    rawAddQuote?: boolean;
}

export interface Translations {
    _code: string;
    _name: string;

    title: string;
    search: string;
    tags: string;
    copy_from: string;
    error: string;
    copied: string;
    maker: string;
}

export interface DictItem {
    title: string | null;
    tags: string[] | null;
    category: string | null;
    content: string | null;
    link: string | null;
}