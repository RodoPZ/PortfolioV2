<template>
	<component :is="href ? 'a' : 'button'" 
		:type="href ? undefined : 'button'"
		:href="href"
		target="_blank"
		rel="noopener noreferrer"
		:class="{
			[baseClasses]: true,
			[mClasses]: size !== 'sm',
			[smClasses]: size === 'sm',
			[primaryClasses]: variant === BUTTON_VARIANT.PRIMARY,
			[secondaryClasses]: variant === BUTTON_VARIANT.SECONDARY,
			[tertiaryClasses]: variant === BUTTON_VARIANT.TERTIARY,
			[outlineClasses]: variant === BUTTON_VARIANT.OUTLINE,
		}" 
		@click="$emit('click')"
	>
		<slot />
	</component>
</template>

<script setup lang="ts">
	import { BUTTON_VARIANT } from '@/types';
	withDefaults(defineProps<{
		variant?: BUTTON_VARIANT,
		size?: 'sm' | 'lg',
		href?: string,
		onClick?: () => void,
	}>(), {
		variant: BUTTON_VARIANT.PRIMARY,
		size: 'lg',
	});
	const baseClasses = 'font-semibold shadow-xs flex items-center justify-center gap-2 cursor-pointer flex-row';
	const mClasses = 'rounded-md px-3.5 py-2.5 text-sm';
	const smClasses = 'rounded-sm px-2 py-1 text-xs';
	const primaryClasses = 'bg-white text-black hover:bg-primary';
	const secondaryClasses = 'bg-white text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-100';
	const tertiaryClasses = 'bg-transparent text-white hover:text-primary ';
	const outlineClasses = 'bg-transparent text-gray-100 ring-1 ring-gray-300 ring-inset hover:text-primary hover:ring-primary';
</script>