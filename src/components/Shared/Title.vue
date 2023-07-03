<script lang="ts" setup>
	import { DictItem } from '@/types/dict'

	const props = defineProps<{
		item: DictItem
	}>()

	const title = computed(() => {
		return props.item.title.trim()
	})

	const regexp = new RegExp('^tetris', 'ig')
	const matches = title.value.match(regexp)
</script>

<template>
	<template v-if="!item.title"> ?</template>

	<n-el v-else-if="matches">
		<n-popover>
			<template #trigger>
				<i class="zChan thinking not-italic text-xl mr-1" />
			</template>

			{{ matches[0] }}
		</n-popover>

		{{ title.replace(regexp, '') }}
	</n-el>

	<template v-else>{{ item.title }}</template>
</template>