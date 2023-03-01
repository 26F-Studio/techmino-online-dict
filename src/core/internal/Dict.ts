import {NEl, NPopover, NText} from "naive-ui";
import {copy} from "@/core/utils";
import {currentLang, dicts, translations} from "@/core/helper/locale";
import {Base64} from "js-base64";
import {languages} from "@/core/shared";
import api from "@/core/api";

export default class Dict {
    constructor(
            public title: string | null,
            public tags: string[],
            public category: string | null,
            protected _content: string | null,
            public link: string | null
    ) {

    }

    static get resolve() {
        if (location.hash.length > 1) {
            try {
                const text = location.hash.slice(1);
                const item = JSON.parse(Base64.decode(text));

                if ('language' in item && 'title' in item) {
                    if (languages.includes(item.language)) {
                        currentLang.value = item.language;
                    }

                    return dicts.value.find(dict => decodeURIComponent(item.title) === dict.title);
                }
            } catch (e) {
                api.$message.error(translations.value.error);
            }
        }
    }

    get content() {
        return this._content
                ?.replaceAll('\\t', '\t')
                ?.replaceAll('\\n', '\n');
    }

    renderTitle() {
        if (!this.title) {
            return h(NText, null, () => '?');
        }

        const exp = /^tetris/ig;
        const matches = this.title.match(exp);

        if (!this.title || !matches) {
            return h(NText, {
                class: 'text-current'
            }, () => this.title);
        }

        const newText = this.title.replace(exp, '');

        return h(NEl, null, () => [
            h(NPopover, null, {
                trigger: () => h('i', {
                    class: 'zChan thinking not-italic text-xl mr-1'
                }),
                default: () => matches[0]
            }),
            h(NText, {
                class: 'text-current'
            }, () => newText)
        ]);
    }

    async share() {
        const that = this;

        await copy(
                new URL('', location.href) + '#' + Base64.encode(
                        JSON.stringify({
                            language: currentLang.value,
                            title: encodeURIComponent(that.title ?? '?')
                        })
                )
        );
    }

    async copy() {
        const that = this;

        await copy(
                [
                    that.title,
                    '',
                    that.content,
                    '',
                    `${translations.value.copy_from}: ${translations.value.title}`
                ].join('\r\n')
        )
    }
}