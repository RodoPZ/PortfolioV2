<template>
	<div class="bg-white w-screen">
		<div class="relative overflow-hidden">
			<HeaderView />
			<main>
				<HeroView />
				<SkillsView />
				<CtaView />
			</main>
			<FooterView />
		</div>
	</div>
</template>
  
<script setup lang="ts">
	import HeaderView from '@/views/landing/HeaderView.vue'
	import FooterView from '@/views/landing/FooterView.vue'
	import HeroView from '@/views/landing/HeroView.vue'
	import SkillsView from '@/views/landing/SkillsView.vue'
	import CtaView from '@/views/landing/CtaView.vue'
</script>