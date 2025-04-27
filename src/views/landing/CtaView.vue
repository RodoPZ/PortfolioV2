<template>
	<div class="relative bg-gray-900">
		<div class="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
			<img class="size-full object-cover" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100" alt="" />
			<div aria-hidden="true" class="absolute inset-0 bg-linear-to-r from-teal-500 to-cyan-600 mix-blend-multiply" />
		</div>
		<div class="relative mx-auto max-w-md px-6 py-12 sm:max-w-7xl sm:py-20 md:py-28 lg:px-8 lg:py-32">
			<div class="md:ml-auto md:w-1/2 md:pl-10">
			<h2 class="text-lg font-semibold text-gray-300">Award winning support</h2>
			<p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">We’re here to help</p>
			<p class="mt-3 text-lg text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.</p>
			<div class="mt-8">
				<div class="inline-flex rounded-md shadow-sm">
				<a href="#" class="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50">
					Visit the help center
					<ArrowTopRightOnSquareIcon class="-mr-1 ml-3 size-5 text-gray-400" aria-hidden="true" />
				</a>
				</div>
			</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
  import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/20/solid'
</script>