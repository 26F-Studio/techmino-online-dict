import {availableLangCodes, DictItem, Translations} from "@/types/shared";
import dict_en from "../../Game/parts/language/dict_en.lua?raw";
import dict_ja from "../../Game/parts/language/dict_ja.lua?raw";
import dict_zh from "../../Game/parts/language/dict_zh.lua?raw";
import lang_en from "@/langs/en.json";
import lang_ja from "@/langs/ja.json";
import lang_zh from "@/langs/zh.json";

export const dictCache = new Map<availableLangCodes, DictItem[]>();

export const dictFiles = {
    en: dict_en,
    ja: dict_ja,
    zh: dict_zh
} as Record<availableLangCodes, string>;

export const langFiles = {
    en: lang_en,
    ja: lang_ja,
    zh: lang_zh
} as Record<availableLangCodes, Translations>;

export const blockStyle = 'not-italic text-cyan-500 text-4xl';

export const categoryColors = {
    help: '#fdba74',
    org: '#fbb741',
    game: '#14a3c7',
    term: '#ff7f7f',
    setup: '#94a3b8',
    pattern: '#bfdfa5',
    command: '#0284c7',
    english: '#2563eb',
    name: '#7a5299'
} as Record<string, string>