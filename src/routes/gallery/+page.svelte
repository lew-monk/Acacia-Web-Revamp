<script>
	import Carousel from '$lib/components/carousel.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Moments from '$lib/components/moments.svelte';
</script>

<section class="">
	<div class=" carousel h-[80vh] flex justify-center items-center w-full relative">
		<Carousel jump={true} />
		<div class="overlay h-full w-full bg-black absolute top-0 left-0 opacity-50"></div>
		<div class="z-10 absolute text-white grid gap-8 text-center">
			<h1 class="text-2xl font-bold">Gallery</h1>
		</div>
	</div>
	<Moments />
	<Footer />
</section>

<style>
	section {
		display: grid;
		grid-column: start / end;
		grid-template-columns: subgrid;
	}
	.carousel {
		grid-column: start / end;
	}
	.secondary {
		grid-column: content / content-end;
	}
</style>
