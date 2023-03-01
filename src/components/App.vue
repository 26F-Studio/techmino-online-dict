<script lang="ts" setup>
import {useAppStore} from "@/core/stores";
import {ContentCopyTwotone, LanguageTwotone, ShareTwotone} from "@vicons/material";
import {Moon, Sun} from "@vicons/tabler";
import {EarthFilled} from "@vicons/carbon";
import {categoryColors, isMobile} from "@/core/shared";
import {NEl, NPopover, NText} from "naive-ui";
import {result, search} from "@/core/helper/filter";
import {languageSelectOptions, setLanguage, translations} from "@/core/helper/locale";
import ApiInjector from "@/components/ApiInjector.vue";
import Dict from "@/core/internal/Dict";

const appStore = useAppStore();
const current = ref(Dict.resolve);

function backAndSearch(value: string) {
    search.value = value;
    current.value = undefined;
}
</script>

<template>
    <n-config-provider :theme="appStore.themeRef" class="h-full">
        <n-message-provider>
            <n-dialog-provider>
                <n-notification-provider>
                    <n-loading-bar-provider>
                        <ApiInjector/>

                        <n-layout class="h-full" native-scrollbar>
                            <n-layout-content class="pb-16 h-full mx-2" native-scrollbar>
                                <!-- 顶部 -->

                                <n-space class="mt-2" justify="space-between">
                                    <!-- 切换主题 -->

                                    <n-button @click="appStore.switchTheme">
                                        <template #icon>
                                            <n-icon :component="appStore.theme === 'light' ? Moon : Sun"/>
                                        </template>
                                    </n-button>

                                    <!-- 切换语言 -->

                                    <n-dropdown :options="languageSelectOptions" animated trigger="click"
                                                @select="setLanguage">
                                        <n-button>
                                            <template #icon>
                                                <n-icon :component="LanguageTwotone"/>
                                            </template>
                                        </n-button>
                                    </n-dropdown>
                                </n-space>

                                <!-- 搜索栏 -->

                                <n-space class="sm:w-1/3 mx-auto mt-20" vertical>
                                    <n-el class="text-center">
                                        <n-h1>{{ translations.title }}</n-h1>
                                        <n-input v-if="!current" v-model:value="search"
                                                 :placeholder="translations.search"
                                                 clearable/>

                                        <!-- 内容显示时显示返回键 -->

                                        <n-space v-else justify="center">
                                            <n-button @click="current = undefined">返回</n-button>
                                        </n-space>
                                    </n-el>

                                    <n-divider/>
                                </n-space>

                                <n-space size="large" vertical>
                                    <!-- 内容列表 -->

                                    <n-space v-if="!current" vertical>
                                        <n-space v-for="(entries, category) in result"
                                                 class="text-center"
                                                 vertical>
                                            <n-text :style="{ color: categoryColors[category] }"
                                                    class="font-bold text-2xl" type="info">
                                                {{ category }}
                                            </n-text>

                                            <!-- 桌面端 -->

                                            <n-space v-if="!isMobile" justify="center">
                                                <n-button v-for="item in entries" :color="categoryColors[category]"
                                                          size="small"
                                                          @click="current = item">
                                                    <Component :is="item.renderTitle()"/>
                                                </n-button>
                                            </n-space>

                                            <!-- 移动端 -->

                                            <n-grid v-else :cols="3" :x-gap="10" :y-gap="10" class="text-center">
                                                <n-grid-item v-for="item in entries">
                                                    <n-button :color="categoryColors[category]" class="w-full"
                                                              @click="current = item">
                                                        <n-popover>
                                                            <template #trigger>
                                                                <n-ellipsis>
                                                                    <Component :is="item.renderTitle()"/>
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
                                        <n-space vertical>
                                            <n-h2>
                                                <Component :is="current.renderTitle()"/>
                                            </n-h2>

                                            <n-text class="whitespace-pre-wrap" v-html="current.content"/>

                                            <n-space class="mt-10 items-end" justify="space-between">
                                                <n-space size="small">
                                                    <n-text>{{ translations.tags }}:&nbsp;</n-text>

                                                    <n-button v-for="tag in current.tags" text type="info"
                                                              @click="backAndSearch(tag)">
                                                        {{ tag }}
                                                    </n-button>
                                                </n-space>

                                                <n-space>
                                                    <!-- 外链 -->

                                                    <n-button v-if="current.link" :href="current.link"
                                                              tag="a">
                                                        <template #icon>
                                                            <n-icon :component="EarthFilled"/>
                                                        </template>
                                                    </n-button>

                                                    <!-- 复制 -->

                                                    <n-button @click="current?.copy()">
                                                        <template #icon>
                                                            <n-icon :component="ContentCopyTwotone"/>
                                                        </template>
                                                    </n-button>

                                                    <!-- 分享 -->

                                                    <n-button @click="current?.share()">
                                                        <template #icon>
                                                            <n-icon :component="ShareTwotone"/>
                                                        </template>
                                                    </n-button>
                                                </n-space>
                                            </n-space>
                                        </n-space>
                                    </n-el>
                                </n-space>
                            </n-layout-content>

                            <!-- 页脚 -->

                            <n-layout-footer class="py-2" position="absolute">
                                <n-space :size="0" justify="center">
                                    <n-el>
                                        <n-text>{{ translations.maker }}:&nbsp;</n-text>
                                        <n-button href="https://zhazha120.cn" tag="a" text type="primary">渣渣120
                                        </n-button>
                                    </n-el>

                                    <n-divider vertical/>

                                    <n-button href="https://github.com/26F-Studio/techmino-online-dict" tag="a" text
                                              type="primary">
                                        Github
                                    </n-button>
                                </n-space>
                            </n-layout-footer>
                        </n-layout>
                    </n-loading-bar-provider>
                </n-notification-provider>
            </n-dialog-provider>
        </n-message-provider>
    </n-config-provider>
</template>
