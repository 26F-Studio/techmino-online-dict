import Parser from "@/core/internal/Parser";
import {translations} from "@/core/helper/locale";
import {useClipboard} from "@vueuse/core";
import api from "@/core/api";

export function preg_replace_callback<T extends string>(v: T, p: RegExp, cb: (m: RegExpMatchArray) => T) {
    const matches = v.matchAll(p);

    Array.from(matches).forEach(value => {
        const replacement = cb(value);
        v = v.replace(value[0], replacement) as T;
    });

    return v;
}

export function parseDictCode(code: string) {
    const parser = new Parser(code);
    parser.parse();
    return parser.items;
}

export async function copy(source: string) {
    const {copy, isSupported} = useClipboard({
        source, legacy: true
    });

    if (!isSupported) {
        api.$message.error(translations.value.error);
        return;
    }

    await copy();
    api.$message.success(translations.value.copied);
}