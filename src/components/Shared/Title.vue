<script lang='ts' setup>

    import { DictItem } from '@/types/dict'

    const props = defineProps<{
        item: DictItem
    }>()

    const regexp = /^tetris/ig
    const matches = props.item.title.match(regexp)
</script>

<template>
    <template v-if='!item.title'>
        ?
    </template>

    <n-el v-else-if='matches'>
        <n-popover>
            <template #trigger>
                <i class='zChan thinking not-italic text-xl mr-1' />
            </template>

            {{ matches[0] }}
        </n-popover>

        {{ item.title.replace(regexp, '') }}
    </n-el>

    <template v-else>{{ item.title }}</template>
</template>