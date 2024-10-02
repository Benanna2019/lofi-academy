<script>
	import '../app.css';
	import Header from '$lib/components/header.svelte';

	let { children } = $props();

	let count = $state(100);
</script>

<main class="bg-baking-software h-full bg-cover bg-center bg-no-repeat">
	<div class="absolute inset-0 bg-black bg-opacity-20"></div>

	<div id="content" class="relative z-10">
		<Header />

		<!-- <div class="absolute inset-0 bg-black bg-opacity-50"></div> -->
		{@render children()}
	</div>
</main>
