<script>
	import '../app.css';
	import Header from '$lib/components/header.svelte';
	import { setDirectionState } from '../app-context/panel-transition-state.svelte';

	let { children } = $props();

	let count = $state(100);
	setDirectionState();
</script>

<main class="bg-baking-software max-h-screen overflow-scroll bg-cover bg-center bg-no-repeat">
	<div class="absolute inset-0 bg-black bg-opacity-20"></div>

	<div id="content" class="relative z-10">
		<Header />

		<!-- <div class="absolute inset-0 bg-black bg-opacity-50"></div> -->
		{@render children()}
	</div>
</main>
