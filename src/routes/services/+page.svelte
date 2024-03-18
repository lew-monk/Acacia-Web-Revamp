<script>
	import Carousel from '$lib/components/carousel.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Services from '$lib/components/services.svelte';
	import Pool from '$lib/images/smallWhatsApp.jpeg';

	const images = [Pool];
</script>

<section>
	<div class=" carousel lg:h-[80vh] h-[60vh] flex justify-center items-center w-full relative">
		<Carousel jump={true} {images} />
		<div class="overlay h-full w-full bg-black absolute top-0 left-0 opacity-50"></div>
		<div class="z-10 absolute text-white grid w-full gap-8 text-center">
			<h1 class="text-2xl font-bold">Services</h1>
		</div>
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
