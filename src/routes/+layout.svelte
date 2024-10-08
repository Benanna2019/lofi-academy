<script lang="ts">
	import Header from '@/lib/components/header.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="h-screen">
	<Header />

	{@render children()}
</div>
