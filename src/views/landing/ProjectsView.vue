<template>
	<div class="relative bg-slate-800 pt-15 pb-24">
		<div class="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
			<h2 class="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
				{{ $t('projects.projects') }}
			</h2>
			<p class="mx-auto mt-5 text-xl text-white">
				{{ $t('projects.description') }}
			</p>
			<ul role="list" class="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 mt-4">
				<li
					v-for="project in projects"
					:key="project.name"
					class="col-span-1 flex flex-col rounded-md shadow-xs bg-slate-700 px-2"
				>
					<div class="py-2">
						<img
							:src="project.image"
							alt="Project Image"
							class="w-full h-48 object-cover rounded-md"
						/>
					</div>
					<div class="pt-2 pb-4 flex flex-col gap-1 text-left flex-1 justify-between">
						<div class="flex flex-row justify-between items-center">
							<h3 class="text-xl font-medium leading-6 text-primary">
								{{ project.name }}
							</h3>
							<div class="text-lg text-gray-500">
								{{ project.emojis }}
							</div>
						</div>
						<p class="text-gray-200 text-sm h-full mb-2">{{ project.text }}</p>
						<div class="flex flex-col gap-2">
							<div class="flex flex-row flex-wrap gap-2">
								<span
									v-for="tag in project.tags"
									:key="tag"
									class="flex-1 inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-white ring-1 ring-inset"
									:style="{ '--tw-ring-color': stringToColor(tag, 1) }"
								>
									<svg
										class="size-1.5"
										:style="{ fill: stringToColor(tag, 1) }"
										viewBox="0 0 6 6"
										aria-hidden="true"
									>
										<circle cx="3" cy="3" r="3" />
									</svg>
									{{ tag }}
								</span>
							</div>
							<div class="flex flex-row gap-2 mt-1">
								<ButtonComponent
									v-for="link in project.links"
									size="sm"
									:key="link.type"
									:href="link.href"
									:variant="BUTTON_VARIANT.OUTLINE"
									:icon="
										link.type === 'Docs'
											? 'Document'
											: 'ArrowTopRightOnSquareIcon'
									"
								>
									{{ link.type }}
									<ArrowTopRightOnSquareIcon class="size-4" />
								</ButtonComponent>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import { BUTTON_VARIANT } from '@/types'
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

// Import all images
const images = import.meta.glob<{ default: string }>('@/assets/images/*.{png,jpeg}', {
	eager: true,
})

const projects = computed(() => [
	{
		name: 'Cold Turkey',
		emojis: '🥶🚭',
		text: t('projects.projectList.13.description'),
		tags: ['Native', 'TypeScript', 'Expo'],
		image: images['/src/assets/images/ColdTurkey.jpeg'].default,
	},
	{
		name: 'Farm Defence',
		emojis: '🐮💀',
		text: t('projects.projectList.10.description'),
		tags: ['Godot'],
		links: [
			{ type: 'GitHub', href: 'https://github.com/RodoPZ/Farm-Defense' },
			{ type: 'Web', href: 'https://croobat.itch.io/farm-defense' },
		],
		image: images['/src/assets/images/FarmDefence.png'].default,
	},
	{
		name: 'Clicker Miner',
		emojis: '⛏️🧨',
		text: t('projects.projectList.11.description'),
		tags: ['Godot'],
		links: [
			{ type: 'GitHub', href: 'https://github.com/RodoPZ/ClickerMiner' },
			{ type: 'Web', href: 'https://croobat.itch.io/clicker-miner' },
		],
		image: images['/src/assets/images/ClickerMiner.png'].default,
	},
	{
		name: 'Lacking Light',
		emojis: '🔦👻',
		text: t('projects.projectList.12.description'),
		tags: ['Godot'],
		links: [
			{ type: 'GitHub', href: 'https://github.com/croobat/lacking-light' },
			{ type: 'Web', href: 'https://croobat.itch.io/lacking-light' },
		],
		image: images['/src/assets/images/LackingLight.png'].default,
	},
	{
		name: 'Portfolio V1',
		emojis: '📁📼',
		text: t('projects.projectList.2.description'),
		tags: ['Vue', 'Sass', 'Bootstrap'],
		links: [
			{ type: 'GitHub', href: 'https://github.com/RodoPZ/Portfolio' },
			{
				type: 'Figma',
				href: 'https://www.figma.com/file/ZjCFBtm0rJQJZPk1BGDG5p/Portfolio?type=design&node-id=43-91&mode=design',
			},
			{ type: 'Web', href: 'https://rodopz.github.io/Portfolio/' },
		],
		image: images['/src/assets/images/PortfolioV1.png'].default,
	},
	{
		name: 'Portfolio V2',
		emojis: '💼🖥️',
		text: t('projects.projectList.3.description'),
		tags: ['Vue', 'TypeScript', 'TailwindCSS'],
		links: [{ type: 'GitHub', href: 'https://github.com/RodoPZ/PortfolioV2' }],
		image: images['/src/assets/images/Portfolio.png'].default,
	},
	{
		name: 'TT',
		emojis: '👨‍🏫🧑‍🎓',
		text: t('projects.projectList.1.description'),
		tags: ['Flutter', 'Dart', 'Python', 'Firebase'],
		links: [
			{ type: 'GitHub', href: 'https://github.com/RodoPZ/TT2-App' },
			{
				type: 'Docs',
				href: 'https://drive.google.com/file/d/1upI9DDdjpoGhQ_D8L4jTMq09jLeLlDaJ/view?pli=1',
			},
		],
		image: images['/src/assets/images/TT.png'].default,
	},
	{
		name: 'Weather App',
		emojis: '🌥️🌡️',
		text: t('projects.projectList.4.description'),
		tags: ['React', 'TypeScript', 'Sass', 'API REST', 'Redux'],
		links: [
			{ type: 'GitHub', href: 'https://github.com/RodoPZ/Weather-app' },
			{
				type: 'Figma',
				href: 'https://www.figma.com/file/ZvTvLQcGVRZ1WK3TvOhoPE/WeatherApp?node-id=153%3A1517&t=cfZoUY3MYBtGm4dv-1',
			},
			{ type: 'Web', href: 'https://rodopz-weatherapp.netlify.app/London' },
		],
		image: images['/src/assets/images/WeatherApp.png'].default,
	},
	{
		name: 'Petgram',
		emojis: '🐈🐈‍⬛',
		text: t('projects.projectList.5.description'),
		tags: ['React', 'Sass', 'Redux'],
		links: [
			{ type: 'GitHub', href: 'https://github.com/RodoPZ/Petgram' },
			{ type: 'Web', href: 'https://rodopz.github.io/Petgram/' },
		],
		image: images['/src/assets/images/Petgram.png'].default,
	},
	{
		name: 'MovieAPI',
		emojis: '🎞️🍿',
		text: t('projects.projectList.6.description'),
		tags: ['TypeScript'],
		links: [
			{
				type: 'Figma',
				href: 'https://www.figma.com/file/MoxZGZpt0YgcA4Jy6h5Y0q/MovieAPI?node-id=232%3A785&t=bHedq500i0zuArBt-1',
			},
			{ type: 'GitHub', href: 'https://github.com/RodoPZ/MovieAPI' },
			{ type: 'Web', href: 'https://rodopz-movieapi.netlify.app/' },
		],
		image: images['/src/assets/images/MovieAPI.png'].default,
	},
	{
		name: 'Cashflow',
		emojis: '💰💸',
		text: t('projects.projectList.7.description'),
		tags: ['Vue', 'TypeScript'],
		links: [
			{ type: 'GitHub', href: 'https://github.com/RodoPZ/CashFlow' },
			{ type: 'Web', href: 'https://rodopz-cashflow.netlify.app/' },
		],
		image: images['/src/assets/images/Cashflow.png'].default,
	},
	{
		name: 'Todo React',
		emojis: '📝📋',
		text: t('projects.projectList.8.description'),
		tags: ['React'],
		links: [
			{ type: 'GitHub', href: 'https://github.com/RodoPZ/TODO_React' },
			{ type: 'Web', href: 'https://rodopz.github.io/TODO_React/#/' },
		],
		image: images['/src/assets/images/TodoApp.png'].default,
	},
	{
		name: 'Platzi Conf',
		emojis: '🏖️💚',
		text: t('projects.projectList.9.description'),
		tags: ['Bootstrap', 'Sass'],
		links: [
			{ type: 'GitHub', href: 'https://github.com/RodoPZ/Platzi-conf' },
			{ type: 'Web', href: 'https://rodopz.github.io/Platzi-conf/' },
		],
		image: images['/src/assets/images/PlatziConf.png'].default,
	},
])

function stringToColor(str: string, alpha = 1): string {
	let hash = 0
	for (let i = 0; i < str.length; i++) {
		hash = str.charCodeAt(i) + ((hash << 5) - hash)
	}
	const hue = Math.abs(hash) % 360
	return `hsla(${hue}, 60%, 60%, ${alpha})`
}
</script>
