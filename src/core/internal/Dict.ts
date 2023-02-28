import {NEl, NPopover, NText} from "naive-ui";
import {copy} from "@/core/utils";
import {currentLang, translations} from "@/core/helper/locale";
import {Base64} from "js-base64";

export default class Dict {
    constructor(
            public title: string | null,
            public tags: string[],
            public category: string | null,
            protected _content: string | null,
            public link: string | null
    ) {

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