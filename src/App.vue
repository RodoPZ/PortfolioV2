<template>
	<div class="bg-slate-800 min-h-screen">
		<HeaderView />
		<main>
			<HeroView id="Hero"/>
			<div class="max-w-5xl mx-auto">
				<SkillsView id="Skills"/>
				<ProjectsView id="Projects"/>
			</div>
			<CtaView id="Contact"/>
		</main>
		<FooterView />
	</div>
</template>
  
<script setup lang="ts">
	import HeaderView from '@/views/landing/HeaderView.vue'
	import FooterView from '@/views/landing/FooterView.vue'
	import HeroView from '@/views/landing/HeroView.vue'
	import SkillsView from '@/views/landing/SkillsView.vue'
	import ProjectsView from '@/views/landing/ProjectsView.vue'
	import CtaView from '@/views/landing/CtaView.vue'
</script>