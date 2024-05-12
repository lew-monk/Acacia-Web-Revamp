<script>
	import BannerImg from '../images/pool-3.jpeg';
	import DatePicker from './date-picker.svelte';
	import { Button } from './ui/button';
	import Select from './select.svelte';
	import Carousel from './carousel.svelte';
	import Bar from '$lib/images/bar-2-comp.jpeg';
	import Tennis from '$lib/images/tennis-comp.jpeg';

	const images = [Tennis, BannerImg, Bar];
</script>

<section class="relative lg:h-[80vh] h-[60vh]">
	<div class=" carousel h-full flex justify-center items-center w-full relative">
		<Carousel jump={false} {images} />
		<div class="overlay h-full w-full bg-black absolute top-0 left-0 opacity-70"></div>
		<div class="w-6/6 absolute flex gap-8 flex-col">
			<!-- <h2 class="text-xl text-primary relative oasis">An Oasis in Juba</h2> -->
			<h1 class="lg:text-5xl md:text-3xl text-2xl text-white text-center leading-snug font-medium">
				Welcome to - <span class="text-white">Acacia Village</span>
				<br />
				<span class="text-base">Your home in Juba</span>
			</h1>
			<!-- <p class="text-base w-10/12 leading-snug font-medium">
				Welcome to one of Juba’s safest and most comfortable residential compounds.
			</p> -->
			<div class="w-full flex justify-center gap-4">
				<Button href="/your-stay" class="shadow-none items-center bg-none rounded h-16 px-12">
					<div class="flex items-center h-8 gap-4">
						<span>Book Now</span>
					</div>
				</Button>

				<Button
					variant="outline"
					href="/contact"
					class="shadow-none bg-none text-white border-2 border-primary rounded h-16 px-12"
					>Contact Us</Button
				>
			</div>
		</div>
	</div>
	<aside
		class="lg:h-24 py-2 grid grid-cols-2 md:grid-cols-4 justify-center md:px-8 px-2 items-center gap-4 rounded w-5/6 lg:w-3/4 bg-white absolute -bottom-0 translate-y-1/2 left-1/2 transform -translate-x-1/2"
	>
		<DatePicker title="Arrival Date" />
		<DatePicker title="Depature Date" />
		<div class="col-span-2 md:col-span-1">
			<Select />
		</div>
		<Button
			href="/contact"
			class="shadow-none bg-none col-span-2 md:col-span-1 border-2 border-primary rounded h-12 px-12"
			>Check Availability</Button
		>
	</aside>
</section>

<style>
	section {
		display: grid;
		grid-column: start / end;
		grid-template-columns: 1fr;
	}
</style>
