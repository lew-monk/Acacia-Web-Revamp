<script>
	import Carousel from './carousel.svelte';
</script>

<div class=" carousel h-[80vh] flex justify-center items-center w-full relative">
	<Carousel jump={true} />
	<div class="overlay h-full w-full bg-black absolute top-0 left-0 opacity-70"></div>
	<div class="z-10 absolute text-white grid gap-8 text-center">
		<h1 class="text-2xl font-bold">About Us</h1>
		<h3 class="font">Home - About us</h3>
	</div>
</div>
