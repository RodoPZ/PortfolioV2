<template>
	<div class="relative bg-slate-80 py-8">
		<div class="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
			<h2 class="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">Projects</h2>
			<p class="mx-auto mt-5 text-xl text-white">Throughout my career, I have undertaken various personal projects that reflect my passion and skills as a developer.</p>
			<ul role="list" class="grid grid-cols-2 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 mt-4">
				<li v-for="project in projects" :key="project.name" class="col-span-1 items-center rounded-md shadow-xs border border-slate-600 bg-slate-700 px-2">
					<div class="py-2">
						<img :src="project.image" alt="Project Image" class="w-full h-48 object-cover rounded-md">
					</div>
					<div class="py-2 flex flex-col gap-2 text-left">
						<div class="flex flex-row justify-between">
							<h3 class="text-xl font-medium leading-6 text-white">{{ project.name }}</h3>
							<div class="mt-1 text-lg text-gray-500">
								{{ project.emojis }}
							</div>
						</div>
						<p class="text-gray-200 text-sm pb-2" >{{ project.text }}</p>
						<div class="flex flex-row flex-wrap gap-2 w-full">
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
						<div class="flex flex-row gap-2">
							<ButtonComponent 
								v-for="link in project.links" 
								size="sm" 
								:key="link.type" 
								:href="link.href" 
								:variant="BUTTON_VARIANT.OUTLINE" 
								:icon="link.type === 'Docs' ? 'Document' : 'ArrowTopRightOnSquareIcon'"
								>
								{{ link.type }}
								<ArrowTopRightOnSquareIcon class="size-4" />
							</ButtonComponent>
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
	const projects = [
		{ name: 'TT', emojis: '👨‍🏫🧑‍🎓', 
			text: "My undergraduate thesis project, aimed at helping elderly individuals remember to take their medications.", 
			tags: ['Flutter', "Dart", "Python", "Firebase"], 
			links: [
				{type: "GitHub", href: "https://github.com/RodoPZ/TT2-App"}, 
				{type: "Docs", href: "https://drive.google.com/file/d/1upI9DDdjpoGhQ_D8L4jTMq09jLeLlDaJ/view?pli=1"}
			], 
			image: "/src/assets/images/TT.png" 
		},
		{ name: 'Portfolio', emojis: '💼🖥️', 
			text: "My portfolio... This portfolio! Built with Vue, created to showcase my projects and knowledge to the world.", 
			tags: ['Vue', "TypeScript", "Sass", "Bootstrap"], 
			links: [
				{type: "GitHub", href: "https://github.com/RodoPZ/Portfolio"}, 
				{type: "Figma", href: "https://www.figma.com/file/ZjCFBtm0rJQJZPk1BGDG5p/Portfolio?type=design&node-id=43-91&mode=design"}

			], 
			image: "/src/assets/images/Portfolio.png" 
		},
		{ name: 'Weather App', emojis: '🌥️🌡️', 
			text: "Weather application that allows you to check the weather conditions anywhere in the world using the 'WeatherApi' API.", 
			tags: ['React', "TypeScript", "Sass", "API REST", "Redux"], 
			links: [
				{type: "GitHub", href: "https://github.com/RodoPZ/Portfolio"}, 
				{type: "Figma", href: "https://www.figma.com/file/ZjCFBtm0rJQJZPk1BGDG5p/Portfolio?type=design&node-id=43-91&mode=design"},
				{type: "Web", href: "https://rodopz-weatherapp.netlify.app/London"}

			], 
			image: "/src/assets/images/WeatherApp.png" 
		},
		{ name: 'Petgram', emojis: '🐈🐈‍⬛', 
			text: "Instagram clone web application for pets built to practice my skills with React.", 
			tags: ['React', "Sass", "Redux"], 
			links: [
				{type: "GitHub", href: "https://github.com/RodoPZ/Petgram"}, 
				{type: "Web", href: "https://rodopz.github.io/Petgram/"}
			], 
			image: "/src/assets/images/Petgram.png" 
		},
		{ name: 'MovieAPI', emojis: '🎞️🍿', 
			text: "Web application that allows you to search for movies and series. Developed using the 'TMDB API'.", 
			tags: ['TypeScript'], 
			links: [
				{type: "Figma", href: "https://www.figma.com/file/MoxZGZpt0YgcA4Jy6h5Y0q/MovieAPI?node-id=232%3A785&t=bHedq500i0zuArBt-1"},
				{type: "GitHub", href: "https://github.com/RodoPZ/MovieAPI"}, 
				{type: "Web", href: "https://rodopz-movieapi.netlify.app/"}
			], 
			image: "/src/assets/images/MovieAPI.png" 
		},
		{ name: 'Cashflow', emojis: '💰💸', 
			text: "Simple web application that allows you to manage your personal finances. Developed using Vue.", 
			tags: ['Vue', 'TypeScript'], 
			links: [
				{type: "GitHub", href: "https://github.com/RodoPZ/CashFlow"}, 
				{type: "Web", href: "https://rodopz-cashflow.netlify.app/"}
			], 
			image: "/src/assets/images/Cashflow.png" 
		},
		{ name: 'Todo React', emojis: '📝📋', 
			text: "Task application developed using React, this was my first web application using React.", 
			tags: ['React'], 
			links: [
				{type: "GitHub", href: "https://github.com/RodoPZ/TODO_React"}, 
				{type: "Web", href: "https://rodopz.github.io/TODO_React/#/"}
			], 
			image: "/src/assets/images/TodoApp.png" 
		},
		{ name: 'Platzi Conf', emojis: '🏖️💚', 
			text: "This is one of the first pages I made, it was created using pure HTML and CSS, following a Platzi course.", 
			tags: ['Bootstrap', 'Sass'], 
			links: [
				{type: "GitHub", href: "https://github.com/RodoPZ/Platzi-conf"}, 
				{type: "Web", href: "https://rodopz.github.io/Platzi-conf/"}
			], 
			image: "/src/assets/images/PlatziConf.png" 
		},
		{ name: 'Farm Defence', emojis: '🐮💀', 
			text: "Tower defense game where you defend your farm from evil monsters, created using the Godot engine and GDScript. ", 
			tags: ['Godot'], 
			links: [
				{type: "GitHub", href: "https://github.com/RodoPZ/Farm-Defense"}, 
				{type: "Web", href: "https://croobat.itch.io/farm-defense"}
			], 
			image: "/src/assets/images/FarmDefence.png" 
		},
		{ name: 'Clicker Miner', emojis: '⛏️🧨', 
			text: "Clicker game where you mine minerals and sell them to buy upgrades with a Gameboy aesthetic. It has over 2000 views on itch.io and newgrounds.", 
			tags: ['Godot'], 
			links: [
				{type: "GitHub", href: "https://github.com/RodoPZ/ClickerMiner"}, 
				{type: "Web", href: "https://croobat.itch.io/clicker-miner"}
			], 
			image: "/src/assets/images/ClickerMiner.png" 
		},
		{ name: 'Lacking Light', emojis: '🔦👻', 
			text: "8-bit Godot roguelike with darkness mechanics where you have to collect keys to escape from the dungeon. We won third place in the Mini Jam 98 game jam with this game.", 
			tags: ['Godot'], 
			links: [
				{type: "GitHub", href: "https://github.com/croobat/lacking-light"}, 
				{type: "Web", href: "https://croobat.itch.io/lacking-light"}
			], 
			image: "/src/assets/images/LackingLight.png" 
		},
	]

	function stringToColor(str: string, alpha = 1): string {
		let hash = 0;
		for (let i = 0; i < str.length; i++) {
			hash = str.charCodeAt(i) + ((hash << 5) - hash);
		}
		const hue = Math.abs(hash) % 360;
		return `hsla(${hue}, 60%, 60%, ${alpha})`;
	}

	
</script>