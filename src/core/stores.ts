import { useOsTheme } from 'naive-ui'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
	state: () => ({
		locale: 'zh',
		theme: useOsTheme().value
	}),
	persist: {
		enabled: true
	}
})