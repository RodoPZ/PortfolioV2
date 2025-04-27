<template>
	  <button type="button" :class="clsx({
			[baseClasses]: true,
			[primaryClasses]: variant === BUTTON_VARIANT.PRIMARY,
			[secondaryClasses]: variant === BUTTON_VARIANT.SECONDARY,
			[outlineClasses]: variant === BUTTON_VARIANT.OUTLINE,
			[tertiaryClasses]: variant === BUTTON_VARIANT.TERTIARY,
		})">
		<slot />
	  </button>
</template>



<script setup lang="ts">
	import clsx from 'clsx';
	import { BUTTON_VARIANT } from '@/types';
	withDefaults(defineProps<{
		variant?: BUTTON_VARIANT,
	}>(), {
		variant: BUTTON_VARIANT.PRIMARY,
	});

	const baseClasses = 'rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-xs flex items-center gap-2';
	const primaryClasses = 'bg-white text-black hover:bg-primary';
	const secondaryClasses = 'bg-white text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-100';
	const tertiaryClasses = 'bg-transparent text-white hover:text-primary ';
	const outlineClasses = 'bg-transparent text-gray-100 ring-2 ring-gray-300 ring-inset hover:text-primary hover:ring-primary';
</script>