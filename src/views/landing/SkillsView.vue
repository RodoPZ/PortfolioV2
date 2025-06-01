<template>
	<div class="relative bg-slate-800 pt-16 pb-8 sm:pt-24 lg:pt-32">
		<div class="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
			<h2 class="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
				{{ $t('skills.skills') }}
			</h2>
			<p class="mx-auto mt-5 text-xl text-white">
				{{ $t('skills.description') }}
			</p>
			<h3 class="mt-12 text-2xl font-bold tracking-tight text-white">
				{{ $t('skills.languages') }}
			</h3>
			<ul
				role="list"
				class="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 mt-4"
			>
				<li
					v-for="project in projects"
					:key="project.name"
					class="col-span-1 flex items-center rounded-md shadow-xs border border-slate-600 bg-slate-700 px-2"
				>
					<img :src="project.icon" alt="icon" class="w-12 h-12" />
					<div
						class="flex flex-col flex-1 items-start justify-between truncate px-4 py-2 text-sm"
					>
						<div class="font-medium text-white">
							{{ project.name }}
						</div>
						<div class="text-sm text-gray-400">{{ project.message }}</div>
					</div>
				</li>
			</ul>
			<h3 class="mt-12 text-2xl font-bold tracking-tight text-white">
				{{ $t('projects.projects') }}
			</h3>
			<ul
				role="list"
				class="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6 mt-4"
			>
				<li
					v-for="technology in technologies"
					:key="technology.name"
					class="col-span-1 divide-y divide-slate-600 items-center rounded-md shadow-xs border border-slate-600 bg-slate-700 px-2"
				>
					<div class="px-4 py-5 sm:p-6 flex items-center justify-center">
						<img :src="technology.icon" alt="icon" class="w-12 h-12" />
					</div>
					<div class="px-4 py-4 sm:px-6">
						<p class="text-sm text-white">{{ technology.name }}</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

// Import all logos
const logos = import.meta.glob<{ default: string }>('@/assets/logos/*.svg', { eager: true })

const { t } = useI18n()

const projects = computed(() => [
	{
		name: 'JavaScript',
		icon: logos['/src/assets/logos/JavaScript.svg'].default,
		href: '#',
		message: t('skills.yearsOfWorkExperience', { count: 3 }),
	},
	{
		name: 'Ruby',
		icon: logos['/src/assets/logos/Ruby.svg'].default,
		href: '#',
		message: t('skills.yearsOfWorkExperience', { count: 2 }),
	},
	{
		name: 'Python',
		icon: logos['/src/assets/logos/Python.svg'].default,
		href: '#',
		message: t('skills.mostlyUsedForScripting'),
	},
])

const technologies = [
	{ name: 'CSS', icon: logos['/src/assets/logos/CSS.svg'].default },
	{ name: 'HTML', icon: logos['/src/assets/logos/HTML.svg'].default },
	{ name: 'TypeScript', icon: logos['/src/assets/logos/TypeScript.svg'].default },
	{ name: 'React', icon: logos['/src/assets/logos/React.svg'].default },
	{ name: 'Native', icon: logos['/src/assets/logos/ReactNative.svg'].default },
	{ name: 'Vue.js', icon: logos['/src/assets/logos/Vue.svg'].default },
	{ name: 'Svelte', icon: logos['/src/assets/logos/Svelte.svg'].default },
	{ name: 'Expo', icon: logos['/src/assets/logos/Expo.svg'].default },
	{ name: 'Next.js', icon: logos['/src/assets/logos/Nextjs.svg'].default },
	{ name: 'Rails', icon: logos['/src/assets/logos/Rails.svg'].default },
	{ name: 'Redux', icon: logos['/src/assets/logos/Redux.svg'].default },
	{ name: 'Supabase', icon: logos['/src/assets/logos/Supabase.svg'].default },
	{ name: 'MySQL', icon: logos['/src/assets/logos/MySQL.svg'].default },
	{ name: 'Firebase', icon: logos['/src/assets/logos/Firebase.svg'].default },
	{ name: 'Bootstrap', icon: logos['/src/assets/logos/Bootstrap.svg'].default },
	{ name: 'Tailwind', icon: logos['/src/assets/logos/TailwindCSS.svg'].default },
	{ name: 'Sass', icon: logos['/src/assets/logos/Sass.svg'].default },
	{ name: 'Docker', icon: logos['/src/assets/logos/Docker.svg'].default },
	{ name: 'Figma', icon: logos['/src/assets/logos/Figma.svg'].default },
	{ name: 'Git', icon: logos['/src/assets/logos/Git.svg'].default },
	{ name: 'Godot', icon: logos['/src/assets/logos/Godot.svg'].default },
	{ name: 'Jest', icon: logos['/src/assets/logos/Jest.svg'].default },
	{ name: 'Windows', icon: logos['/src/assets/logos/Windows.svg'].default },
	{ name: 'Linux', icon: logos['/src/assets/logos/Linux.svg'].default },
	{ name: 'MacOS', icon: logos['/src/assets/logos/MacOS.svg'].default },
]
</script>
