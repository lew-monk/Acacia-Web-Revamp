<script lang="ts">
	import '../app.css';
	import type { Config } from '@sveltejs/adapter-vercel';
	export const config: Config = { runtime: 'edge' };
</script>

<section>
	<slot />
</section>

<style>
	section {
		display: grid;
		grid-template-columns: [start] 120px [content] 1fr [content-end] 120px[end];
	}
</style>
