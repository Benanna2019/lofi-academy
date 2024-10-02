<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import Button from './ui/button/button.svelte';
</script>

<header
	class=" flex h-16 justify-between border-y-2 border-white bg-white/30 tracking-tight backdrop-blur"
>
	<div class="flex w-1/4">
		<div class="contents">
			<div>
				<a
					href="/"
					class={cn(
						buttonVariants({ variant: 'link' }),
						'h-full font-mono text-xl font-bold text-white'
					)}
				>
					<!-- <img src="/logo.svg" alt="Lofi Academy" /> -->
					Lofi Academy
				</a>
			</div>
		</div>
	</div>
	<div class="flex w-1/2 justify-center">
		<div class="h-full">
			<a
				href="/talks"
				class={cn(
					buttonVariants({ variant: 'link' }),
					'text-md h-full font-mono font-thin text-white'
				)}
			>
				Workshops
			</a>
		</div>
		<div class="h-full">
			<a
				href="/tips"
				class={cn(
					buttonVariants({ variant: 'link' }),
					'text-md h-full font-mono font-thin text-white'
				)}
			>
				Tips
			</a>
		</div>
		<div class="h-full">
			<a
				href="/tutorials"
				class={cn(
					buttonVariants({ variant: 'link' }),
					'text-md h-full font-mono font-thin text-white'
				)}
			>
				Tutorials
			</a>
		</div>
		<div class="h-full">
			<a
				href="/essays"
				class={cn(
					buttonVariants({ variant: 'link' }),
					'text-md h-full font-mono font-thin text-white'
				)}
			>
				Essays
			</a>
		</div>
	</div>
	<div class="flex w-1/4 justify-end">
		<div class="flex h-full items-center px-2">
			<button
				class={cn(buttonVariants({ variant: 'link' }), 'text-md font-mono font-thin text-white')}
			>
				Login
			</button>
		</div>
		<div class="flex h-full items-center px-6">
			<Button
				class={cn(buttonVariants({ variant: 'outline' }), 'text-md font-mono font-thin text-black')}
				target="_blank"
				rel="noopener noreferrer"
				href="https://faequeite.ck.page/eb37af7d8f"
			>
				Subscribe
			</Button>
		</div>
	</div>
</header>
