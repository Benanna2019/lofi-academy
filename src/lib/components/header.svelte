<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import Button from './ui/button/button.svelte';
	import { Input } from '$lib/components/ui/input';
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Avatar from '$lib/components/ui/avatar';
	import { useUser } from '@/instantdb/useUser.svelte';
	import { db, id, tx } from '@/instantdb/db';

	let googAuthURI = $state('');

	$effect(() => {
		if (typeof window === 'undefined') return;
		googAuthURI = db.auth.createAuthorizationURL({
			clientName: 'google-web',
			redirectURL: window.location.href
		});
	});

	let authInitialized = $state(false);
	let renderMagicCodePage = $state(false);
	let email = $state('');

	let user = useUser(db);

	$inspect('user', user);

	function handleSignOut() {
		db.auth.signOut();
		// user = null;
		authInitialized = false;
	}

	async function handleSignIn(e: Event) {
		e.preventDefault();
		const form = e.target as HTMLFormElement;
		email = form.email.value;
		try {
			await db.auth.sendMagicCode({ email });
			renderMagicCodePage = true;
		} catch (error: unknown) {
			if (error instanceof Error && 'body' in error) {
				alert(`Error: ${(error as any).body?.message}`);
			} else {
				alert('An error occurred');
			}
		}
	}

	async function handleCodeSubmit(e: Event) {
		e.preventDefault();
		const form = e.target as HTMLFormElement;
		const code = form.code.value || '';
		try {
			let response = await db.auth.signInWithMagicCode({ email, code });
			// if (response.user) {
			// 	db.transact([
			// 		tx.users[id()].update({
			// 			userId: response.user.id,
			// 			email: response.user.email,
			// 			createdAt: response.user.createdAt
			// 		})
			// 	]);
			// }
		} catch (error: unknown) {
			if (error instanceof Error && 'body' in error) {
				alert(`Error: ${(error as any).body?.message}`);
			} else {
				alert('An error occurred');
			}
		}
	}
</script>

<header
	class="sticky top-0 z-20 flex h-[5%] justify-between border-y-2 border-white bg-white/30 tracking-tight backdrop-blur"
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
				href="/workshops"
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
			<Dialog.Root>
				<Dialog.Trigger
					class={cn(buttonVariants({ variant: 'link' }), 'text-md font-mono font-thin text-white')}
				>
					{#if user.state.user}
						<Avatar.Root>
							<!-- <Avatar.Image src={user.state.user.avatarUrl} /> -->
							<Avatar.Fallback class="bg-transparent text-white">CN</Avatar.Fallback>
						</Avatar.Root>
					{:else}
						Login
					{/if}
				</Dialog.Trigger>
				<Dialog.Content>
					<Dialog.Header>
						<Dialog.Description>
							{@render modalContent()}
						</Dialog.Description>
					</Dialog.Header>
				</Dialog.Content>
			</Dialog.Root>
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

{#snippet modalContent()}
	{#if !renderMagicCodePage}
		<div class="flex flex-col gap-4">
			<Dialog.Title>Log in with a magic code:</Dialog.Title>
			<form id="email-input-form" onsubmit={handleSignIn} class="space-y-4">
				<Input type="email" name="email" placeholder="Email" />
				<Button type="submit">Send code</Button>
			</form>
		</div>
	{:else}
		<div>
			<form id="magic-code-form" onsubmit={handleCodeSubmit} class="space-y-4">
				<Dialog.Title>Check your email</Dialog.Title>
				<p>We've sent a magic code to {email}. Enter it below to sign in.</p>
				<Input type="text" name="code" placeholder="Magic Code" />
				<Button type="submit">Verify code</Button>
			</form>
		</div>
	{/if}
{/snippet}
