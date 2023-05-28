import { defineStore } from 'pinia'
import { useOsTheme } from 'naive-ui'

export const useAppStore = defineStore('app', {
    state: () => ({
        theme: useOsTheme().value
    }),
    persist: {
        enabled: true
    }
})