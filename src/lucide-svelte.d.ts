declare module 'lucide-svelte/icons/*' {
	import { SvelteComponentTyped } from 'svelte';

	// Define a generic type for the icon components
	export default class IconComponent extends SvelteComponentTyped<{
		// Define any props that the icon components might accept
		class?: string;
		size?: string | number;
		color?: string;
		strokeWidth?: number;
	}> {}
}
