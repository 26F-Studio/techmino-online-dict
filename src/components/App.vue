<script lang="ts" setup>
import {useAppStore, useSharedStore} from "@/core/stores";
import {groupBy} from "lodash-es";
import {ContentCopyTwotone, LanguageTwotone} from "@vicons/material";
import {Moon, Sun} from "@vicons/tabler";
import {EarthFilled} from "@vicons/carbon";
import {isMobile} from "@/core/utils";
import {categoryColors} from "@/core/shared";
import {createDiscreteApi, NPopover} from "naive-ui";

const appStore = useAppStore();
const sharedStore = useSharedStore();

const items = computed(() => {
    return groupBy(appStore.dictItems.map(item => {
        if (item.content !== null) {
            item.content = item.content
                    .replaceAll('\\t', '\t')
                    .replaceAll('\\n', '\n');
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

const DictTitle = defineComponent({
    props: {
        content: String
    },
    setup(props) {
        const exp = /^tetris/ig;
        const matches = props.content?.match(exp);

        if (!matches) {
            return () => h('span', null, props.content);
        }

        const newText = props.content?.replace(exp, '');

        return () => h('div', null, [
            h(NPopover, null, {
                trigger: () => h('span', {
                    class: 'font-[proportional] not-italic text-xl mr-1',
                    innerHTML: '&#xf0015;'
                }),
                default: () => matches[0]
            }),
            h('span', null, newText)
        ]);
    }
});
</script>

<template>
    <n-config-provider :theme="appStore.themeRef" class="h-full">
        <n-layout class="h-full" native-scrollbar>
            <n-layout-content class="pb-16 h-full mx-2" native-scrollbar>
                <n-space class="mt-2" justify="space-between">
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
                    <n-space v-if="!sharedStore.showing" vertical>
                        <n-space v-for="(entries, category) in items"
                                 class="text-center"
                                 vertical>
                            <n-text :style="{ color: categoryColors[category] }" class="font-bold text-2xl" type="info">
                                {{ category }}
                            </n-text>

                            <!-- Desktop -->
                            <n-space v-if="!isMobile" justify="center">
                                <n-button v-for="item in entries" :color="categoryColors[category]" size="small"
                                          @click="sharedStore.setCurrent(item)">
                                    <DictTitle :content="item.title"/>
                                </n-button>
                            </n-space>

                            <!-- Mobile -->
                            <n-grid v-else :cols="3" :x-gap="10" :y-gap="10" class="text-center">
                                <n-grid-item v-for="item in entries">
                                    <n-button :color="categoryColors[category]" class="w-full"
                                              @click="sharedStore.setCurrent(item)">
                                        <n-popover>
                                            <template #trigger>
                                                <n-ellipsis>
                                                    <DictTitle :content="item.title"/>
                                                </n-ellipsis>
                                            </template>

                                            {{ item.title }}
                                        </n-popover>
                                    </n-button>
                                </n-grid-item>
                            </n-grid>
                        </n-space>
                    </n-space>

                    <n-el v-else class="sm:w-1/3 mx-auto">
                        <n-space vertical>
                            <n-h2>
                                <DictTitle :content="sharedStore.current?.title"/>
                            </n-h2>

                            <n-text class="whitespace-pre-wrap" v-html="sharedStore.current?.content"/>
                            <n-space class="mt-10 items-end" justify="space-between">
                                <n-space size="small">
                                    <n-text>{{ appStore.translations.tags }}:&nbsp;</n-text>

                                    <n-button v-for="tag in sharedStore.current?.tags" text type="info"
                                              @click="sharedStore.setSearch(tag)">
                                        {{ tag }}
                                    </n-button>
                                </n-space>

                                <n-space>
                                    <n-button v-if="sharedStore.current?.link" :href="sharedStore.current?.link"
                                              tag="a">
                                        <template #icon>
                                            <n-icon :component="EarthFilled"/>
                                        </template>
                                    </n-button>

                                    <n-button @click="sharedStore.copyCurrentDict">
                                        <template #icon>
                                            <n-icon :component="ContentCopyTwotone"/>
                                        </template>
                                    </n-button>
                                </n-space>
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

<style scoped>
@font-face {
    font-family: "proportional";
    src: url("../fonts/proportional.otf");
}
</style>