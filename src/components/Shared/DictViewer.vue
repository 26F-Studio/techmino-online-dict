<script lang='ts' setup>
    import { EarthFilled } from '@vicons/carbon'
    import { ContentCopyTwotone, ShareTwotone } from '@vicons/material'
    import { DictItem } from '@/types/dict'
    import { useClipboard } from '@vueuse/core'
    import { useI18n } from 'vue-i18n'
    import Title from '@/components/Shared/Title.vue'

    defineProps<{
        item: DictItem
    }>()

    const i18n = useI18n()
    const $message = useMessage()

    async function useCopy(source: string) {
        const { copy, isSupported } = useClipboard({
            source, legacy: true
        })

        if (!isSupported) {
            $message.error(i18n.t('error'))
            return
        }

        await copy()
        $message.success(i18n.t('copied'))
    }

    function share(item: DictItem) {
        useCopy(new URL(`#${item.id}`, location.href).toString())
    }

    function copy(item: DictItem) {
        useCopy([
            item.title,
            '',
            item.content,
            '',
            `${i18n.t('copy_from')}: ${i18n.t('title')}`
        ].join('\r\n'))
    }

    const $emits = defineEmits(['tag-click'])
</script>

<template>
    <n-space vertical>
        <n-h2>
            <Title :item='item' />
        </n-h2>

        <n-text class='whitespace-pre-wrap' v-html='item.content' />

        <n-space class='mt-10 items-end' justify='space-between'>
            <n-space size='small'>
                <n-text>{{ $t('tags') }}:&nbsp;</n-text>

                <n-button v-for='tag in item.tags' text type='info'
                          @click="$emits('tag-click', tag)">
                    {{ tag }}
                </n-button>
            </n-space>

            <n-space>
                <!-- 外链 -->

                <n-button v-if='item.link' :href='item.link'
                          tag='a'>
                    <template #icon>
                        <n-icon :component='EarthFilled' />
                    </template>
                </n-button>

                <!-- 复制 -->

                <n-button @click='copy(item)'>
                    <template #icon>
                        <n-icon :component='ContentCopyTwotone' />
                    </template>
                </n-button>

                <!-- 分享 -->

                <n-button @click='share(item)'>
                    <template #icon>
                        <n-icon :component='ShareTwotone' />
                    </template>
                </n-button>
            </n-space>
        </n-space>
    </n-space>
</template>