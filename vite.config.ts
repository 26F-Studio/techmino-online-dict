import Vue from '@vitejs/plugin-vue'
import { resolve as resolvePath } from 'path'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

// @ts-ignore
import Convert from './src/plugins/convert'

export default defineConfig({
	base: process.env.VITE_BASE_PUBLIC_PATH,
	resolve: {
		alias: {
			'@': resolvePath(__dirname, 'src')
		}
	},
	plugins: [
		Convert(),
		UnoCSS(),
		Vue(),
		AutoImport({
			imports: [
				'vue',
				'vue-i18n',
				'@vueuse/core',
				'pinia',
				{
					'naive-ui': [
						'useDialog',
						'useMessage',
						'useNotification',
						'useLoadingBar'
					]
				}
			]
		}),
		Components({
			resolvers: [
				NaiveUiResolver()
			]
		})
	]
})