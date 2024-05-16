<script>
	import Carousel from '$lib/components/carousel.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Services from '$lib/components/services.svelte';
	import Pool from '$lib/images/SwimmingPool4.jpg';

	const images = [Pool];
</script>

<section>
	<div class=" carousel lg:h-[80vh] h-[60vh] flex justify-center items-center w-full relative">
		<Carousel jump={true} {images} />
	</div>
	<Services />
	<!-- 	<Moments /> -->
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
</style>
