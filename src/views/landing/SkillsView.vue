<template>
	<div class="relative bg-slate-800 pt-16 pb-8 sm:pt-24 lg:pt-32">
		<div class="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
			<h2 class="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">Skills</h2>
			<p class="mx-auto mt-5 text-xl text-white">In my role as a full-stack developer, I have accumulated experience in front-end development with React and Vue.js, as well as back-end development with Ruby. My dedication to continuous learning drives me to explore and adopt new technologies consistently.</p>
			<h3 class="mt-12 text-2xl font-bold tracking-tight text-white">Languages</h3>
			<ul role="list" class="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 mt-4">
				<li v-for="project in projects" :key="project.name" class="col-span-1 flex items-center rounded-md shadow-xs border border-slate-600 bg-slate-700 px-2">
					<img :src="`src/assets/logos/${project.icon}.svg`" alt="icon" class="w-12 h-12">
					<div class="flex flex-col flex-1 items-start justify-between truncate px-4 py-2 text-sm">
						<a :href="project.href" class="font-medium text-white hover:text-gray-600">{{ project.name }}</a>
						<div class="text-sm text-gray-300">{{ project.message }}</div>
					</div>
				</li>
			</ul>
			<h3 class="mt-12 text-2xl font-bold tracking-tight text-white">Technologies</h3>
			<ul role="list" class="grid grid-cols-2 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-6 mt-4">
				<li v-for="technology in technologies" :key="technology.name" class="col-span-1 divide-y divide-slate-600 items-center rounded-md shadow-xs border border-slate-600 bg-slate-700 px-2">
					<div class="px-4 py-5 sm:p-6 flex items-center justify-center">
						<img :src="`src/assets/logos/${technology.icon}.svg`" alt="icon" class="w-12 h-12">
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
	const projects = [
		{ name: 'JavaScript', icon: 'JavaScript', href: '#', message: '3 years of work experience' },
		{ name: 'Ruby', icon: 'Ruby', href: '#', message: '2 years of work experience' },
		{ name: 'Python', icon: 'Python', href: '#', message: 'Mostly used for scripting' },
	]

	const technologies = [
		{ name: 'CSS', icon: 'CSS' },
		{ name: 'HTML', icon: 'HTML' },
		{ name: 'TypeScript', icon: 'TypeScript' },
		{ name: 'React', icon: 'React' },
		{ name: 'Native', icon: 'ReactNative' },
		{ name: 'Vue.js', icon: 'Vue' },
		{ name: 'Svelte', icon: 'Svelte' },
		{ name: 'Expo', icon: 'Expo' },
		{ name: 'Next.js', icon: 'Nextjs' },
		{ name: 'Rails', icon: 'Rails' },
		{ name: 'Redux', icon: 'Redux' },
		{ name: 'Supabase', icon: 'Supabase' },
		{ name: 'MySQL', icon: 'MySQL' },
		{ name: 'Firebase', icon: 'Firebase' },
		{ name: 'Bootstrap', icon: 'Bootstrap' },
		{ name: 'Tailwind', icon: 'TailwindCSS' },
		{ name: 'Sass', icon: 'Sass' },
		{ name: 'Docker', icon: 'Docker' },
		{ name: 'Figma', icon: 'Figma' },
		{ name: 'Git', icon: 'Git' },
		{ name: 'Godot', icon: 'Godot' },
		{ name: 'Jest', icon: 'Jest' },
		{ name: 'Windows', icon: 'Windows' },
		{ name: 'Linux', icon: 'Linux' },
		{ name: 'MacOS', icon: 'MacOS' },
	]
</script>