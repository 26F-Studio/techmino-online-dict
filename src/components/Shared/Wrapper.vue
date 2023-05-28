<script lang='ts' setup>
    import { useAppStore } from '@/core/stores'
    import { darkTheme, lightTheme } from 'naive-ui'

    const appStore = useAppStore()

    const theme = computed(() => {
        if (appStore.theme === 'light') {
            return lightTheme
        }

        return darkTheme
    })
</script>

<template>
    <n-config-provider :theme='theme' class='h-full'>
        <n-message-provider>
            <n-dialog-provider>
                <n-notification-provider>
                    <n-loading-bar-provider>
                        <slot />
                    </n-loading-bar-provider>
                </n-notification-provider>
            </n-dialog-provider>
        </n-message-provider>
    </n-config-provider>
</template>