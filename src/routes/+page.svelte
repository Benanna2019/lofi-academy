<script>
	import BlurFade from '$lib/components/motion/blurfade.svelte';
	import LoFiOrbit from '@/lib/components/lofi-orbit.svelte';
	import Particles from '@/lib/components/motion/particles.svelte';
</script>

<BlurFade delay={0.25} class="pointer-events-none left-0 top-0 -z-10 w-full overflow-x-clip">
	<section class="min-h-screen w-full overflow-visible px-6 pb-12 pt-16 sm:pb-20 sm:pt-52">
		<div
			class="fade animate-fade pointer-events-none absolute left-0 top-0 -z-10 h-full w-full overflow-x-clip"
		>
			<div
				class="parallax-element absolute top-0 h-[1000px] w-full transform-gpu after:absolute after:bottom-0 after:left-0 after:h-full after:w-full after:bg-gradient-to-t after:from-black after:to-black/0"
				style="transform: translateY(-55.3px) translate3d(0px, 0px, 0px);"
			>
				<img
					alt="page background"
					fetchpriority="high"
					decoding="async"
					data-nimg="fill"
					class="absolute inset-0 h-[100%] w-[100%] object-cover"
					src="/mountains.png"
				/>
			</div>
			<!-- Keep this but find ideas more fitting for pages -->
			<div
				class="flex h-max w-full transform-gpu items-end justify-end border-2 border-red-500"
				style="transform: translateY(-73.2px) translate3d(0px, 0px, 0px);"
			>
				<!-- <img
					alt="Satellite"
					class="homepageBounce mr-[10%] mt-[10%]"
					height="400"
					src=""
					loading="lazy"
					width="400"
				/> -->
			</div>
		</div>
		<header>
			<BlurFade delay={0.7} class="mx-auto flex w-full max-w-7xl flex-col gap-6 sm:gap-10">
				<h1
					class="text-balance text-7xl font-[800] leading-[1] -tracking-[2.5px] text-white sm:text-[80px] [@media(max-width:500px)]:text-5xl"
				>
					Learn to build <br class="hidden lg:inline" />
					Local First Software
				</h1>
				<h2
					class="reveal animate-revealHero2 -mt-2 text-balance text-xl font-medium text-neutral-100 sm:-mt-4"
				>
					There is a more refreshing way to build software. <br class="hidden lg:inline" />
					We will show you the way.
					<br class="hidden lg:inline" />
				</h2>
				<!-- Should probably leave the below based off if they are logged in or not -->
				<!-- <div
					class="reveal animate-revealHero3 flex flex-col gap-2 sm:items-center [@media(min-width:340px)]:flex-row"
				>
					<a
						aria-label="Get started for free"
						class="group flex w-max items-center gap-1 rounded-full border-white bg-neutral-200 px-3.5 py-2 text-sm font-semibold text-neutral-800 transition-colors sm:hover:bg-white sm:hover:text-black"
						href="">Get started for free</a
					>
				</div> -->
			</BlurFade>
		</header>
	</section>
	<section
		class="relative z-10 flex min-h-screen w-full gap-14 overflow-visible px-6 pt-40 sm:pb-16 sm:pt-64"
	>
		<div
			class="gap-10lg:flex-nowrap mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center lg:justify-between"
		>
			<LoFiOrbit />
			<Particles className="absolute inset-0" refresh={true} />
		</div>
	</section>
	<section class="relative z-10 flex w-full gap-14 px-6 sm:pb-16">
		<div
			class="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-10 lg:flex-nowrap lg:justify-between"
		>
			<Particles className="absolute inset-0" refresh={true} />
			<div
				class="prose prose-neutral prose-invert prose-h2:-mt-20 prose-h2:pt-28 prose-p:opacity-90 prose-img:rounded-xl sm:hover:prose-a:no-underline mx-auto w-5/6 max-w-3xl text-white"
			>
				<h2 class="text-3xl font-bold">Inspiration & Background</h2>
				<p class="pb-4 pt-4 text-lg">
					It is tempting to want to give some grand ideology for building Local First Software.
					After all, this should be an academy and academies tend to have some sort of mantra. If
					there was something at the core of Local First Software, and there are many things, I
					think it would be this:
				</p>
				<blockquote class="border-l-2 border-gray-200 pl-4 text-lg font-semibold italic">
					What if building web apps didn't have to be so complicated?
				</blockquote>
				<p class="pt-4 text-lg">
					This statement has been echoed by many leaders in the Local First movement and this is why
					the academy exists. Not only to help you build from a Local First paradigm but to simplify
					the things that should be simple.
				</p>
				<p class="pt-4 text-lg">
					There are many other ideals to Local First that will be elaborated on in what we hope are
					the years to come. But for now the hope and aim of this academy is to help people build
					software in a more simplified way by thinking Local First.
				</p>
				<p class="pt-4 text-lg">
					If you are interested in following along, you can create an account/sign up and we will
					send updates via email newsletters.
				</p>
				<p class="pt-4 text-lg">
					Thank you and we look forward to building out the academy and going on this journey with
					you.
				</p>
				<p class="pt-4 text-lg">
					- <span class="italic">Local First Academy</span>
				</p>
			</div>
		</div>
	</section>
</BlurFade>
