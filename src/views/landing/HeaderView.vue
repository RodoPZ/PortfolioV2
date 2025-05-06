<template>
	<Popover as="header" v-slot="{ open, close }">
		<!-- Blur overlay -->
		<div
			v-if="open"
			class="fixed inset-0 z-40 backdrop-blur-sm bg-black/30 transition-all"
			aria-hidden="true"
		></div>

		<div class="fixed top-0 left-0 right-0 z-50 bg-slate-800 py-4 border-b border-gray-700">
			<nav
				class="relative mx-auto flex max-w-7xl items-center justify-between px-6"
				aria-label="Global"
			>
				<div class="flex flex-1 items-center">
					<div class="flex w-full items-center justify-between lg:w-auto">
						<p class="text-primary text-2xl font-bold">&lt;RodoPZ/&gt;</p>
						<div class="-mr-2 flex items-center lg:hidden">
							<PopoverButton
								class="focus-ring-inset relative inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 focus:ring-2 focus:ring-white focus:outline-hidden"
							>
								<span class="absolute -inset-0.5" />
								<span class="sr-only">Open main menu</span>
								<Bars3Icon class="size-6" aria-hidden="true" />
							</PopoverButton>
						</div>
					</div>
					<div class="hidden space-x-8 lg:ml-10 lg:flex">
						<ButtonComponent
							:variant="BUTTON_VARIANT.TERTIARY"
							v-for="item in navigation"
							:key="item.name"
							@click="scrollToSection(item.location)"
						>
							{{ item.name }}
						</ButtonComponent>
					</div>
				</div>
				<div class="hidden lg:flex lg:items-center lg:space-x-5">
					<ButtonComponent :variant="BUTTON_VARIANT.OUTLINE" @click="toggleLanguage()">
						<LanguageIcon class="size-5" aria-hidden="true" />
						{{ locale === LANGUAGE.ES ? 'ES' : 'EN' }}
					</ButtonComponent>
					<ButtonComponent>
						{{ t('general.resume') }}
					</ButtonComponent>
				</div>
			</nav>
		</div>

		<transition
			enter-active-class="duration-150 ease-out"
			enter-from-class="opacity-0 scale-95"
			enter-to-class="opacity-100 scale-100"
			leave-active-class="duration-100 ease-in"
			leave-from-class="opacity-100 scale-100"
			leave-to-class="opacity-0 scale-95"
		>
			<PopoverPanel
				focus
				class="fixed inset-x-0 top-0 z-50 origin-top transform p-2 transition lg:hidden"
			>
				<div class="overflow-hidden rounded-lg bg-slate-700 shadow-md ring-1 ring-black/5">
					<div class="flex items-center justify-between px-5 pt-4">
						<div>
							<img
								class="h-8 w-auto"
								src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?from-color=teal&from-shade=500&to-color=cyan&to-shade=600&toShade=600"
								alt=""
							/>
						</div>
						<div class="-mr-2">
							<PopoverButton
								class="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:text-primary focus:ring-2 focus:ring-cyan-600 focus:outline-hidden focus:ring-inset"
							>
								<span class="absolute -inset-0.5" />
								<span class="sr-only">Close menu</span>
								<XMarkIcon class="size-6" aria-hidden="true" />
							</PopoverButton>
						</div>
					</div>
					<div
						class="pt-5 pb-20 space-y-1 px-2 flex flex-col gap-2 justify-center items-center"
					>
						<ButtonComponent
							:variant="BUTTON_VARIANT.TERTIARY"
							v-for="item in navigation"
							:key="item.name"
							@click="scrollToSection(item.location, close)"
						>
							{{ item.name }}
						</ButtonComponent>
						<ButtonComponent
							:variant="BUTTON_VARIANT.OUTLINE"
							@click="toggleLanguage()"
						>
							<LanguageIcon class="size-5" aria-hidden="true" />
							{{ locale === LANGUAGE.ES ? 'ES' : 'EN' }}
						</ButtonComponent>
						<ButtonComponent @click="toggleLanguage()">
							{{ t('general.resume') }}
						</ButtonComponent>
					</div>
				</div>
			</PopoverPanel>
		</transition>
	</Popover>
</template>

<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon, LanguageIcon } from '@heroicons/vue/24/outline'
import ButtonComponent from '@/components/ButtonComponent.vue'
import { BUTTON_VARIANT } from '@/types'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t, locale } = useI18n({ useScope: 'global' })

enum LANGUAGE {
	ES = 'es',
	EN = 'en',
}

const toggleLanguage = () => {
	locale.value = locale.value === LANGUAGE.ES ? LANGUAGE.EN : LANGUAGE.ES
}

const navigation = computed(() => [
	{ name: t('navbar.about'), location: 'Hero' },
	{ name: t('navbar.skills'), location: 'Skills' },
	{ name: t('navbar.projects'), location: 'Projects' },
	{ name: t('navbar.contactme'), location: 'Contact' },
])

const scrollToSection = (sectionId: string, close = () => {}) => {
	const element = document.getElementById(sectionId)
	if (element) {
		element.scrollIntoView({ behavior: 'smooth' })
		close()
	}
}
</script>
