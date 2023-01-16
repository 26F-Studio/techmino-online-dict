import {defineStore} from "pinia";
import {darkTheme, DropdownOption, lightTheme, useOsTheme} from "naive-ui";
import {dictFiles, langFiles} from "@/core/shared";
import {availableLangCodes, DictItem} from "@/types/shared";
import {Parser} from "@/core/parser";

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
            return new Parser(dictFiles[state.lang]).items;
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
            this.lang = code;
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
        }
    }
});