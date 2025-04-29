<template>
	<div class="bg-slate-700 pb-10 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-17 lg:pb-14">
		<div class="mx-auto max-w-7xl lg:px-8">
			<div class="mx-auto max-w-md px-6 sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
				<div class="lg:py-24 flex flex-col items-center text-center">
					<h1 class="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
						<span class="block text-primary">Rodolfo Pinedo Suárez</span>
						<span class="block bg-linear-to-r from-teal-200 to-cyan-400 bg-clip-text pb-3 text-transparent sm:pb-5">Full Stack Developer</span>
					</h1>
					<p class="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">I am a Full Stack developer with experience in React and Ruby, passionate about web development. I am always ready to learn new technologies and skills, whether for a project or as a hobby.</p>
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
					<ButtonComponent :variant="BUTTON_VARIANT.OUTLINE">
						Resume
					</ButtonComponent>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import ButtonComponent from '@/components/ButtonComponent.vue'
	import { LinkedinIcon, MailIcon, GithubIcon } from '@/assets/icons'
	import { BUTTON_VARIANT } from '@/types'
</script>