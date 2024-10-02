<script>
	import { blur } from 'svelte/transition';
	import BlurFade from '$lib/components/motion/blurfade.svelte';
</script>

<div
	class="prose max-w-screen mx-auto mt-10 flex h-screen flex-col items-center justify-center gap-4"
>
	<BlurFade delay={0.25} class="absolute border-2 border-white bg-yellow-500/30 backdrop-blur">
		<BlurFade delay={0.25 * 3} class="relative z-10 p-6 font-mono text-lg text-white">
			<h1 class="text-3xl">Lofi Academy</h1>

			<p class="pt-6">We are choosing to invest in a different future.</p>

			<p class="pt-6">A future where data and software can be crafted</p>
			<p class="pt-2">with the smallest number of people in mind.</p>

			<p class="pt-6">Where "local" starts to mean something again.</p>

			<p class="pt-6">A world where building is for joy and purpose.</p>
			<p class="pt-6 font-bold italic">And Local is First.</p>
		</BlurFade>
	</BlurFade>
</div>
