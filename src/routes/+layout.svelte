<script lang="ts">
	import '../app.css';
	import type { Config } from '@sveltejs/adapter-vercel';
	export const config: Config = { runtime: 'edge' };
	import Navbar from '$lib/components/navbar.svelte';
	import { onNavigate } from '$app/navigation';
	import { afterNavigate } from '$app/navigation';
	import { Toaster } from '$lib/components/ui/sonner';
	import { fade } from 'svelte/transition';
	import { ModeWatcher } from 'mode-watcher';

	// hide by default
	let visible = false;

	let duration;

	afterNavigate(({ from }) => {
		// only animate if the navigation came from outside the page
		duration = from === null ? 600 : 0;
		// toggle visbility in any case
		visible = true;
	});

	onNavigate((navigation) => {
		if (navigation.to?.route.id === navigation.from?.route.id) return;
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<Toaster theme="light" />

<ModeWatcher defaultMode="light" />
<svelte:head>
	<title
		>Acacia Village. Welcome to one of Juba’s safest and most comfortable residential compounds.
	</title>
</svelte:head>
{#if visible}
	<section in:fade={{ duration }} class="w-screen overflow-x-hidden relative">
		<Navbar />
		<slot />
	</section>
{/if}

<style>
	section {
		display: grid;
		grid-template-columns: [start] 100px [content] 1fr [content-end] 100px[end];
		align-items: start;
	}
	@media (max-width: 768px) {
		section {
			grid-template-columns: [start] 20px [content] 1fr [content-end] 20px[end];
		}
	}
	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-right {
		from {
			transform: translateY(30px);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateY(-30px);
		}
	}

	:root::view-transition-old(root) {
		animation: 90ms cubic-bezier(0.4, 0, 1, 1) both slide-to-left;
	}

	:root::view-transition-new(root) {
		animation: 500ms cubic-bezier(0, 0, 0.2, 1) 90ms both slide-from-right;
	}
	@media (prefers-reduced-motion) {
		::view-transition-group(*),
		::view-transition-old(*),
		::view-transition-new(*) {
			animation: none !important;
		}
	}
</style>
