import { getContext, setContext } from 'svelte';

// Define the possible directions for navigation
type Direction = 'left' | 'right';

// Direction State Class
export class DirectionState {
	direction: Direction = $state('left');

	toggleDirection() {
		// Toggle the direction between 'left' and 'right'
		this.direction = this.direction === 'right' ? 'left' : 'right';
	}
}

const DIRECTION_KEY = Symbol('DIRECTION');

// Set the direction state in the context
export function setDirectionState() {
	return setContext(DIRECTION_KEY, new DirectionState());
}

// Get the direction state from the context
export function getDirectionState() {
	return getContext<ReturnType<typeof setDirectionState>>(DIRECTION_KEY);
}

export const right_panel =
	'right-0 relative translate-x-full w-1/2 flex-col items-center justify-center h-full max-h-screen min-h-screen transform overflow-y-auto border-l border-gray-150 bg-white/30 backdrop-blur pb-10 transition duration-250 ease-in-out';

export const left_panel =
	'left-0 relative translate-x-full w-1/2 flex-col items-center justify-center h-full max-h-screen min-h-screen transform overflow-y-auto border-r border-gray-150 bg-white/30 backdrop-blur pb-10 transition duration-250 ease-in-out';
