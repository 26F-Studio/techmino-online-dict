import {defineStore} from "pinia";
import {darkTheme, useOsTheme} from "naive-ui";

export const useAppStore = defineStore('app', {
    state: () => ({
        theme: useOsTheme().value
    }),
    getters: {
        themeRef(state) {
            return state.theme === 'light' ? null : darkTheme;
        }
    },
    actions: {
        switchTheme() {
            this.theme = this.theme === 'light' ? 'dark' : 'light';
        }
    },
    persist: {
        enabled: true
    }
});