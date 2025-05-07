<template>
	<footer class="bg-slate-800" aria-labelledby="footer-heading">
		<h2 id="footer-heading" class="sr-only">Footer</h2>
		<div class="mx-auto max-w-md px-6 py-12 sm:max-w-7xl lg:px-8 lg:py-16">
			<div class="xl:gap-3 flex flex-col items-center">
				<h1 class="text-2xl font-bold text-primary lg:text-4xl">&lt;RodoPZ/&gt;</h1>
				<p class="text-base text-white text-center">
					{{ $t('footer.description') }}
				</p>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts"></script>
