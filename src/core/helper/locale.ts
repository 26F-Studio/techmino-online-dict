import {parseDictCode} from "@/core/utils";
import dict_code_zh from "@/../Game/parts/language/dict_zh.lua?raw";
import dict_code_en from "@/../Game/parts/language/dict_en.lua?raw";
import dict_code_ja from "@/../Game/parts/language/dict_ja.lua?raw";
import transitions_zh from "@/transitions/zh.json";
import transitions_en from "@/transitions/en.json";
import transitions_ja from "@/transitions/ja.json";
import {AvailableLangCodes, Translations} from "@/types/shared";
import Dict from "@/core/internal/Dict";
import {MenuOption} from "naive-ui";
import {languages} from "@/core/shared";

const _key = 'language';

const language = ref(localStorage.getItem(_key) as AvailableLangCodes);

export const currentLang = computed<AvailableLangCodes>({
    get() {
        if (!language.value || !languages.includes(language.value)) {
            return 'zh';
        }

        return language.value;
    },
    set(newValue: AvailableLangCodes) {
        localStorage.setItem(_key, newValue);
        language.value = newValue;
    }
});

const items: Record<AvailableLangCodes, {
    dicts: Dict[],
    translations: Translations
}> = {
    zh: {
        dicts: parseDictCode(dict_code_zh),
        translations: transitions_zh
    },
    en: {
        dicts: parseDictCode(dict_code_en),
        translations: transitions_en
    },
    ja: {
        dicts: parseDictCode(dict_code_ja),
        translations: transitions_ja
    }
};

export const languageSelectOptions = computed(() => {
    return Object.values(items).map(item => {
        return <MenuOption>{
            label: item.translations._name,
            key: item.translations._code,
            disabled: currentLang.value === item.translations._code
        };
    });
});

export const dicts = computed(() => {
    return items[currentLang.value].dicts;
});

export const translations = computed(() => {
    return items[currentLang.value].translations;
});