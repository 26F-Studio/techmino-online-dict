<script lang="ts" setup>
	import DictViewer from '@/components/Shared/DictViewer.vue'
	import Title from '@/components/Shared/Title.vue'
	import Wrapper from '@/components/Shared/Wrapper.vue'
	import { categoryColors } from '@/core/shared'
	import { useAppStore } from '@/core/stores'

	import dict_en from '@/dict/dict_en.json'
	import dict_ja from '@/dict/dict_ja.json'
	import dict_vi from '@/dict/dict_vi.json'
	import dict_zh from '@/dict/dict_zh.json'
	import { DictItem } from '@/types/dict'
	import { LanguageTwotone } from '@vicons/material'
	import { Moon, Sun } from '@vicons/tabler'
	import { DropdownOption, NEl, NPopover, NText } from 'naive-ui'
	import { find, groupBy } from 'remeda'
	import { useI18n } from 'vue-i18n'

	const appStore = useAppStore()

	const languageSelectOptions: DropdownOption[] = [
		{
			label: 'English',
			key: 'en'
		},
		{
			label: '日本語',
			key: 'ja'
		},
		{
			label: '简体中文',
			key: 'zh'
		},
		{
			label: 'Tiếng Việt',
			key: 'vi'
		}
	]

	const current = ref()
	const search = ref('')

	const isMobile = computed(() => {
		return screen.width < 640
	})

	const i18n = useI18n()

	const dictMap: Record<string, DictItem[]> = {
		en: dict_en,
		ja: dict_ja,
		zh: dict_zh,
		vi: dict_vi
	}

	const dict = computed(() => {
		return dictMap[i18n.locale.value]
	})

	tryOnMounted(() => {
		// 处理 hash

		function checkHash() {
			if (location.hash.length > 1) {
				current.value = find([...dictMap.en, ...dictMap.ja, ...dictMap.zh, ...dictMap.vi], item => {
					return item.id === location.hash.substring(1)
				})
			}
		}

		window.addEventListener('hashchange', () => {
			checkHash()
		})

		checkHash()
	})

	const items = computed(() => {
		const result = dict.value.filter(item => {
			const searchValue = search.value.toLowerCase()

			return [
				!!item.title.toLowerCase().match(searchValue),
				item.tags
					.map(tag => {
						return tag.toLowerCase()
					})
					.includes(searchValue)
			].includes(true)
		})

		return groupBy(result, item => item.category)
	})

	function switchTheme() {
		if (appStore.theme === 'light') {
			appStore.theme = 'dark'
			return
		}

		appStore.theme = 'light'
	}

	function back() {
		current.value = undefined
		location.replace(new URL(location.pathname, location.href).toString())
	}

	function backAndSearch(value: string) {
		back()
		search.value = value
	}

	function setLocale(value: string) {
		appStore.locale = value
		i18n.locale.value = value
	}

	tryOnMounted(() => {
		i18n.locale.value = appStore.locale
	})
</script>

<template>
	<Wrapper>
		<n-layout native-scrollbar position="absolute">
			<n-layout-content class="pb-16 mx-2" native-scrollbar>
				<!-- 顶部 -->

				<n-space class="mt-2" justify="space-between">
					<!-- 切换主题 -->

					<n-button @click="switchTheme">
						<template #icon>
							<n-icon :component="appStore.theme === 'light' ? Moon : Sun" />
						</template>
					</n-button>

					<!-- 切换语言 -->

					<n-dropdown
						:options="languageSelectOptions"
						:value="$i18n.locale"
						animated
						trigger="click"
						@select="setLocale"
					>
						<n-button>
							<template #icon>
								<n-icon :component="LanguageTwotone" />
							</template>
						</n-button>
					</n-dropdown>
				</n-space>

				<!-- 搜索栏 -->

				<n-space class="sm:w-1/3 mx-auto mt-20" vertical>
					<n-el class="text-center">
						<n-h1>{{ $t('title') }}</n-h1>
						<n-input v-if="!current" v-model:value="search" :placeholder="$t('search')" clearable />

						<!-- 内容显示时显示返回键 -->

						<n-space v-else justify="center">
							<n-button @click="back">
								{{ $t('back') }}
							</n-button>
						</n-space>
					</n-el>

					<n-divider />
				</n-space>

				<n-space size="large" vertical>
					<!-- 内容列表 -->

					<n-space v-if="!current" vertical>
						<n-space v-for="(entries, category) in items" class="text-center" vertical>
							<n-text :style="{ color: categoryColors[category] }" class="font-bold text-2xl" type="info">
								{{ category }}
							</n-text>

							<!-- 桌面端 -->

							<n-space v-if="!isMobile" justify="center">
								<n-button
									v-for="item in entries"
									:color="categoryColors[category]"
									size="small"
									@click="current = item"
								>
									<Title :item="item" />
								</n-button>
							</n-space>

							<!-- 移动端 -->

							<n-grid v-else :cols="3" :x-gap="10" :y-gap="10" class="text-center">
								<n-grid-item v-for="item in entries">
									<n-button :color="categoryColors[category]" class="w-full" @click="current = item">
										<n-popover>
											<template #trigger>
												<n-ellipsis>
													<Title :item="item" />
												</n-ellipsis>
											</template>

											{{ item.title }}
										</n-popover>
									</n-button>
								</n-grid-item>
							</n-grid>
						</n-space>
					</n-space>

					<!-- 内容显示 -->

					<n-el v-else class="sm:w-1/3 mx-auto">
						<DictViewer :item="current" @tag-click="backAndSearch" />
					</n-el>
				</n-space>
			</n-layout-content>

			<!-- 页脚 -->

			<n-layout-footer class="py-2" position="absolute">
				<n-space :size="0" justify="center">
					<n-el>
						<n-text>{{ $t('maker') }}:&nbsp;</n-text>
						<n-button href="https://zhazha120.cn" tag="a" text type="primary"> WOSHIZHAZHA120</n-button>
					</n-el>

					<n-divider vertical />

					<n-button href="https://github.com/26F-Studio/techmino-online-dict" tag="a" text type="primary">
						Github
					</n-button>
				</n-space>
			</n-layout-footer>
		</n-layout>
	</Wrapper>
</template>