import {Base64} from "js-base64";
import {currentLang, dicts, translations} from "@/core/helper/locale";
import {languages} from "@/core/shared";
import api from "@/core/api";

export function tryResolveDictFromHash() {
    if (location.hash.length > 1) {
        try {
            const text = location.hash.slice(1);
            const item = JSON.parse(Base64.decode(text));

            if ('language' in item && 'title' in item) {
                if (languages.includes(item.language)) {
                    currentLang.value = item.language;
                }

                return dicts.value.find(_ => decodeURIComponent(item.title) === _.title);
            }
        } catch (e) {
            api.$message.error(translations.value.error);
        }
    }
}