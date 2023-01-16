<script lang="ts" setup>
import "@/styles/blocks.scss";
import {useAppStore, useSharedStore} from "@/core/stores";
import {groupBy} from "lodash-es";
import {LanguageTwotone} from "@vicons/material";
import {Moon, Sun} from "@vicons/tabler";
import {EarthFilled} from "@vicons/carbon";
import {isMobile} from "@/core/utils";

const appStore = useAppStore();
const sharedStore = useSharedStore();

const items = computed(() => {
    return groupBy(appStore.dictItems.map(item => {
        if (item.content !== null) {
            item.content = item.content
                    .replaceAll('\\t', '&#09;')
                    .replaceAll('\\n', '<br>');
        }

        return item;
    }).filter(item => {
        if (!sharedStore.search) {
            return true;
        }

        return [
            !!item.title
                    ?.toLowerCase()
                    .match(
                            sharedStore.search?.toLowerCase()
                    ),
            !!item.tags
                    ?.map(tag => {
                        return tag.toLowerCase();
                    })
                    .includes(
                            sharedStore.search?.toLowerCase()
                    )
        ].includes(true);
    }), 'category');
});
</script>

<template>
    <n-config-provider :theme="appStore.themeRef" class="h-full">
        <n-layout class="h-full">
            <n-layout-content class="pb-16 h-full mx-2">
                <n-space justify="space-between" class="mt-2">
                    <n-button @click="appStore.switchTheme">
                        <template #icon>
                            <n-icon :component="appStore.theme === 'light' ? Moon : Sun"/>
                        </template>
                    </n-button>

                    <n-dropdown :options="appStore.langOptions" animated trigger="click"
                                @select="appStore.handleLangUpdate">
                        <n-button>
                            <template #icon>
                                <n-icon :component="LanguageTwotone"/>
                            </template>
                        </n-button>
                    </n-dropdown>
                </n-space>

                <n-space class="sm:w-1/3 mx-auto mt-20" vertical>
                    <n-el class="text-center">
                        <n-h1>{{ appStore.translations.title }}</n-h1>
                        <n-input v-if="!sharedStore.showing" v-model:value="sharedStore.search"
                                 :placeholder="appStore.translations.search"
                                 clearable/>

                        <n-space v-else justify="center">
                            <n-button @click="sharedStore.removeCurrent">返回</n-button>
                        </n-space>
                    </n-el>

                    <n-divider/>
                </n-space>

                <n-space size="large" vertical>
                    <n-space vertical v-if="!sharedStore.showing">
                        <!-- 手机的条目显示 -->

                        <n-space v-for="(items, category) in items" v-if="isMobile" class="text-center" vertical>
                            <n-text class="font-bold text-2xl" type="info">{{ category }}</n-text>

                            <n-grid :cols="3" :x-gap="10" :y-gap="10" class="text-center">
                                <n-grid-item v-for="item in items">
                                    <n-button class="w-full" @click="sharedStore.setCurrent(item)">
                                        <n-ellipsis>{{ item.title }}</n-ellipsis>
                                    </n-button>
                                </n-grid-item>
                            </n-grid>
                        </n-space>

                        <!-- 电脑的条目显示 -->

                        <n-space v-for="(items, category) in items" v-else class="text-center" vertical>
                            <n-text class="font-bold text-2xl" type="info">{{ category }}</n-text>

                            <n-space justify="center">
                                <n-button v-for="item in items" size="small" @click="sharedStore.setCurrent(item)">
                                    {{ item.title }}
                                </n-button>
                            </n-space>
                        </n-space>
                    </n-space>

                    <n-el v-else class="sm:w-1/3 mx-auto">
                        <n-space vertical>
                            <n-h2>{{ sharedStore.current.title }}</n-h2>
                            <n-text v-html="sharedStore.current.content"/>

                            <n-space class="mt-10 items-end" justify="space-between">
                                <n-space size="small">
                                    <n-text>{{ appStore.translations.tags }}:&nbsp;</n-text>

                                    <n-button v-for="tag in sharedStore.current.tags" text type="info"
                                              @click="sharedStore.setSearch(tag)">
                                        {{ tag }}
                                    </n-button>
                                </n-space>

                                <n-button v-if="sharedStore.current.link" :href="sharedStore.current.link" tag="a">
                                    <template #icon>
                                        <n-icon :component="EarthFilled"/>
                                    </template>
                                </n-button>
                            </n-space>
                        </n-space>
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
    </n-config-provider>
</template>
