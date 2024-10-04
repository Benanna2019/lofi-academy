<script>
	import { slide, fly, fade } from 'svelte/transition';
	import { quintOut, quintIn } from 'svelte/easing';
	import { onNavigate } from '$app/navigation';
	import BlurFade from '$lib/components/motion/blurfade.svelte';
	import {
		getDirectionState,
		left_panel,
		right_panel
	} from '@/app-context/panel-transition-state.svelte';

	let animateText = $state(false);

	$effect(() => {
		setTimeout(() => {
			animateText = true;
		}, 1000);

		() => {
			animateText = false;
		};
	});

	const directionState = getDirectionState();

	const panelClass = directionState.direction === 'left' ? left_panel : right_panel;
</script>

<div
	transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'x' }}
	class="prose relative flex h-screen w-1/2 flex-col items-center justify-center gap-4 border-r-[1px] border-white bg-white/30 backdrop-blur"
>
	<div class="h-[95%]">
		{#if animateText}
			<div
				transition:fly={{ delay: 350, y: 200, duration: 1500 }}
				class="pt-20 font-mono text-lg text-black"
			>
				<h1 class="text-3xl">Lofi Academy</h1>

				<p class="pt-6">We are choosing to invest in a different future.</p>

				<p class="pt-6">A future where data and software can be crafted</p>
				<p class="pt-2">with the smallest number of people in mind.</p>

				<p class="pt-6">Where "local" starts to mean something again.</p>

				<p class="pt-6">A world where building is for joy and purpose.</p>
				<p class="pt-6 font-bold italic">And Local is First.</p>
			</div>
		{/if}
	</div>
</div>
