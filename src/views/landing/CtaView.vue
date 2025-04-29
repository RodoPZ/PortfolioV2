<template>
	<div class="relative bg-gray-700 p-8 flex items-center justify-center min-h-screen">
		<div class="flex flex-col items-center px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
			<h2 class="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">Contact me!</h2>
			<p class="mx-auto mt-5 text-xl text-white">Hi. Thanks for checking out my portfolio. If you have any questions, suggestions, or want to get in touch, feel free to visit the links below. 
				<br> I would love to hear from you! </p>
			<div class="flex gap-1 mt-4 pb-3">
				<ButtonComponent :variant="BUTTON_VARIANT.TERTIARY">
					<LinkedinIcon size="32" />
				</ButtonComponent>
				<ButtonComponent :variant="BUTTON_VARIANT.TERTIARY">
					<MailIcon size="32" />
				</ButtonComponent>
				<ButtonComponent :variant="BUTTON_VARIANT.TERTIARY">
					<GithubIcon size="32" />
				</ButtonComponent>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import ButtonComponent from '@/components/ButtonComponent.vue'
	import { LinkedinIcon, MailIcon, GithubIcon } from '@/assets/icons'
	import { BUTTON_VARIANT } from '@/types'
</script>