<script lang="ts">
	import '../app.css';
	import type { Config } from '@sveltejs/adapter-vercel';
	export const config: Config = { runtime: 'edge' };
	import Navbar from '$lib/components/navbar.svelte';
</script>

<svelte:head>
	<title
		>Acacia Village. Welcome to one of Juba’s safest and most comfortable residential compounds.
	</title>
</svelte:head>
<section>
	<Navbar />
	<slot />
</section>

<style>
	section {
		display: grid;
		grid-template-columns: [start] 120px [content] 1fr [content-end] 120px[end];
	}
</style>
