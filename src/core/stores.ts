import {defineStore} from "pinia";
import {createDiscreteApi, darkTheme, DropdownOption, lightTheme, useOsTheme} from "naive-ui";
import {dictCache, dictFiles, langFiles} from "@/core/shared";
import {availableLangCodes, DictItem} from "@/types/shared";
import {Parser} from "@/core/parser";
import {Base64} from "js-base64";
import {copy} from "@/core/utils";

export const useAppStore = defineStore('app', {
    state: () => ({
        theme: useOsTheme().value,
        lang: 'zh' as availableLangCodes
    }),
    getters: {
        themeRef(state) {
            switch (state.theme) {
                case 'light':
                    return lightTheme;
                case 'dark':
                    return darkTheme;
                default:
                    return null;
            }
        },
        dictItems(state) {
            if (dictCache.has(state.lang)) {
                return dictCache.get(state.lang)!;
            }

            const result = new Parser(dictFiles[state.lang]).items;
            dictCache.set(state.lang, result);

            return result;
        },
        translations(state) {
            return langFiles[state.lang];
        },
        langOptions(state) {
            return [
                {
                    label: 'English',
                    key: 'en',
                    disabled: state.lang === 'en'
                },
                {
                    label: '日本語',
                    key: "ja",
                    disabled: state.lang === 'ja'
                },
                {
                    label: '简体中文',
                    key: 'zh',
                    disabled: state.lang === 'zh'
                }
            ] as DropdownOption[];
        }
    },
    actions: {
        switchTheme() {
            this.theme = this.theme === 'light' ? 'dark' : 'light';
        },
        handleLangUpdate(code: availableLangCodes) {
            const sharedStore = useSharedStore();

            this.lang = code;
            sharedStore.removeCurrent();
        }
    },
    persist: {
        enabled: true
    }
});

export const useSharedStore = defineStore('shared', {
    state: () => ({
        search: ref<string>(),
        current: ref<DictItem>()
    }),
    getters: {
        showing(state) {
            return !!state.current;
        }
    },
    actions: {
        setSearch(content: string) {
            this.search = content;
            this.removeCurrent();
        },
        setCurrent(item: DictItem) {
            this.current = item;
        },
        removeCurrent() {
            this.current = undefined;
        },
        _checkCurrent() {
            const appStore = useAppStore();

            const {message, unmount} = createDiscreteApi(['message'], {
                configProviderProps: {
                    theme: appStore.themeRef
                }
            });

            if (!this.current) {
                message.error('?', {
                    onAfterLeave() {
                        unmount();
                    }
                });

                return;
            }
        },
        async shareCurrentDict() {
            const appStore = useAppStore();
            this._checkCurrent();

            await copy(
                    new URL('/', location.href) + '#' + Base64.encode(
                            JSON.stringify({
                                locale: appStore.lang,
                                title: encodeURIComponent(this.current!.title ?? "?")
                            })
                    )
            );
        },
        async copyCurrentDict() {
            const appStore = useAppStore();
            this._checkCurrent();

            await copy(
                    [
                        this.current?.title,
                        '',
                        this.current?.content,
                        '',
                        `${appStore.translations['copy_from']}: ${appStore.translations['title']}`
                    ].join('\r\n')
            );
        }
    }
});