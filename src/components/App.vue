<script lang="ts" setup>
import "@/styles/blocks.scss";
import dict_en from "../../Game/parts/language/dict_en.lua?raw";
import dict_ja from "../../Game/parts/language/dict_ja.lua?raw";
import dict_zh from "../../Game/parts/language/dict_zh.lua?raw";
import lang_en from "@/langs/en.json";
import lang_ja from "@/langs/ja.json";
import lang_zh from "@/langs/zh.json";
import {computed, ref} from "vue";
import {parse} from "@/core/parser";
import {darkTheme, DropdownOption, useOsTheme} from "naive-ui";
import {LanguageTwotone} from "@vicons/material";
import {EarthFilled} from "@vicons/carbon";
import {Menu2} from "@vicons/tabler";
import {isMobile} from "@/core/utils";

type availableLangCodes = 'en' | 'ja' | 'zh';
const currentLang = ref<availableLangCodes>('zh');

const current = ref();
const osTheme = useOsTheme();
const search = ref();

watch(search, () => {
    tempHideSelectorInNav.value = false;
});

const navCollapsed = ref(true);
const tempHideSelectorInNav = ref(true);

const theme = computed(() => {
    return osTheme.value === 'dark' ? darkTheme : null;
});

const currentItem = computed(() => {
    if (!current.value) {
        return null;
    }

    return (item => {
        item.content = item.content
                .replaceAll('\\t', '&#09;')
                .replaceAll('\\n', '<br>');

        return item;
    })(current.value);
});

const items = computed(() => {
    const files = {
        en: dict_en,
        ja: dict_ja,
        zh: dict_zh
    } as Record<availableLangCodes, string>;

    const code = files[currentLang.value];

    if (!code) {
        throw new Error;
    }

    return parse(code);
});

const finalItems = computed(() => {
    const result = {} as Record<string, {
        title: string | null;
        content: string | null;
        tags: string | null;
        link: string | null;
    }[]>;

    const filteredItems = items.value.filter(item => {
        if (!item || !search.value) {
            return true;
        }

        return item.title?.match(search.value) || item.tags?.split(' ').includes(search.value);
    });

    filteredItems.forEach(item => {
        const category = item.category ?? 'unknown';

        if (!result[category]) {
            result[category] = [];
        }

        result[category].push(item);
    });

    return result;
});

const langOptions = computed(() => {
    return [
        {
            label: 'English',
            key: 'en',
            disabled: currentLang.value === 'en'
        },
        {
            label: '日本語',
            key: "ja",
            disabled: currentLang.value === 'ja'
        },
        {
            label: '简体中文',
            key: 'zh',
            disabled: currentLang.value === 'zh'
        }
    ] as DropdownOption[];
});

function handleLangChange(v: availableLangCodes) {
    current.value = null;
    currentLang.value = v;
}

const langs = computed(() => {
    const files = {
        en: lang_en,
        ja: lang_ja,
        zh: lang_zh
    } as Record<availableLangCodes, {
        title: string;
        search: string;
        tags: string;
    }>;

    const items = files[currentLang.value];

    if (!items) {
        throw new Error;
    }

    return items;
});
</script>

<template>
    <n-config-provider :theme="theme" class="h-full">
        <n-layout class="h-full" has-sider>
            <n-layout-sider v-if="isMobile" :collapsed="navCollapsed" :collapsed-width="0"
                            :show-collapsed-content="false" collapse-mode="width">
                <n-el class="p-10">
                    <n-input v-model:value="search" :placeholder="langs['search']" clearable/>

                    <n-space vertical>
                        <n-el v-for="(items, category) in finalItems">
                            <n-divider>
                                <n-text :depth="3">{{ category }}</n-text>
                            </n-divider>

                            <n-space :size="0" vertical>
                                <n-button v-for="item in items"
                                          :type="(currentItem?.title === item.title ? 'success' : 'default')" text
                                          @click="current = item">
                                    {{ item.title }}
                                </n-button>
                            </n-space>
                        </n-el>
                    </n-space>
                </n-el>
            </n-layout-sider>

            <n-layout class="h-full">
                <n-layout-content class="h-full pb-16">
                    <n-el v-if="isMobile" class="absolute top-[10px] left-[10px]">
                        <n-button @click="navCollapsed = !navCollapsed">
                            <template #icon>
                                <n-icon :component="Menu2"/>
                            </template>
                        </n-button>
                    </n-el>

                    <n-el class="absolute top-[10px] right-[10px]">
                        <n-dropdown :options="langOptions" animated trigger="click" @select="handleLangChange">
                            <n-button>
                                <template #icon>
                                    <n-icon :component="LanguageTwotone"/>
                                </template>
                            </n-button>
                        </n-dropdown>
                    </n-el>

                    <n-space vertical>
                        <n-el class="mt-20 lg:w-1/4 mx-2 lg:mx-auto text-center">
                            <n-h1>{{ langs['title'] }}</n-h1>
                            <n-input v-model:value="search" :placeholder="langs['search']" clearable/>

                            <n-space v-if="!tempHideSelectorInNav && isMobile && search">
                                <n-el v-for="(items, category) in finalItems">
                                    <n-divider>
                                        <n-text :depth="3">{{ category }}</n-text>
                                    </n-divider>

                                    <n-space :size="0" vertical>
                                        <n-button v-for="item in items"
                                                  :type="(currentItem?.title === item.title ? 'success' : 'default')"
                                                  text
                                                  @click="tempHideSelectorInNav = true; current = item">
                                            {{ item.title }}
                                        </n-button>
                                    </n-space>
                                </n-el>
                            </n-space>
                        </n-el>

                        <n-divider/>

                        <n-el class="lg:w-1/2 mx-2 lg:mx-auto">
                            <n-grid :cols="isMobile ? 4 : 5">
                                <n-grid-item v-if="!isMobile">
                                    <n-space vertical>
                                        <n-el v-for="(items, category) in finalItems">
                                            <n-divider>
                                                <n-text :depth="3">{{ category }}</n-text>
                                            </n-divider>

                                            <n-space :size="0" vertical>
                                                <n-button v-for="item in items"
                                                          :type="(currentItem?.title === item.title ? 'success' : 'default')"
                                                          text
                                                          @click="current = item">
                                                    {{ item.title }}
                                                </n-button>
                                            </n-space>
                                        </n-el>
                                    </n-space>
                                </n-grid-item>

                                <n-grid-item :span="4" class="lg:ml-10 lg:mt-5">
                                    <n-space v-if="currentItem" vertical>
                                        <n-h2>{{ currentItem?.title }}</n-h2>
                                        <n-text v-html="currentItem.content"/>

                                        <n-space class="mt-5 items-end" justify="space-between">
                                            <n-space size="small" v-if="currentItem.tags">
                                                <n-text>{{ langs['tags'] }}:&nbsp;</n-text>
                                                <n-button v-for="tag in currentItem.tags.split(' ')" text type="info"
                                                          @click="search = tag">
                                                    {{ tag }}
                                                </n-button>
                                            </n-space>

                                            <n-el v-else/>

                                            <n-button v-if="currentItem.link" :href="currentItem.link" tag="a">
                                                <template #icon>
                                                    <n-icon :component="EarthFilled"/>
                                                </template>
                                            </n-button>
                                        </n-space>
                                    </n-space>

                                    <n-empty v-else/>
                                </n-grid-item>
                            </n-grid>
                        </n-el>
                    </n-space>
                </n-layout-content>

                <n-layout-footer class="py-2" position="absolute">
                    <n-space :size="0" justify="center">
                        <n-el>
                            <n-text>制作:&nbsp;</n-text>
                            <n-button href="https://zhazha120.cn" tag="a" text type="primary">渣渣120</n-button>
                        </n-el>

                        <n-divider vertical/>

                        <n-button href="https://github.com/26F-Studio/techmino-online-dict" tag="a" text type="primary">
                            Github
                        </n-button>
                    </n-space>
                </n-layout-footer>
            </n-layout>
        </n-layout>
    </n-config-provider>
</template>
