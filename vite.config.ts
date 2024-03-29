import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve as resolvePath } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// @ts-ignore
import setupDict from './scripts/setup.ts'

export default defineConfig({
	base: process.env.VITE_BASE_PUBLIC_PATH,
	resolve: {
		alias: {
			'@': resolvePath(__dirname, 'src')
		}
	},
	plugins: [
		setupDict(),

		vue(),
		AutoImport({
			imports: [
				'vue',
				{
					'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar']
				}
			]
		}),
		Components({
			resolvers: [NaiveUiResolver()]
		})
	]
})
