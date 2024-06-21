<script lang="ts">
	import Cottage1 from '$lib/images/Cottage2.jpg';
	import PoolRoom from '$lib/images/PoolRoom6.jpg';
	import Conference from '$lib/images/Conference3.jpg';
	import { lazyimage } from 'svelte-lazyimage-cache';
	import { Button } from './ui/button';
	import { onMount } from 'svelte';
	import { type CarouselAPI } from '$lib/components/ui/carousel/context';
	import * as Carousel from '$lib/components/ui/carousel/index.js';

	const placeholder = 'https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif';
	onMount(() => {
		const elements = document.querySelector('.first').focus();
	});

	let api: CarouselAPI;

	const handleFocus = (e: FocusEvent) => {
		const target = e.target as HTMLElement;
		const index = target.tabIndex;
		api.scrollTo(index);
	};
</script>

<section class=" bg-[#F6F6EF] py-12 flex items-center" id="stay">
	<div class="pt-24 pb-12 gap-4">
		<h1
			class="text-2xl block lg:hidden leading-snug w-full text-textPrimary font-semibold lg:font-medium"
		>
			Your Stay at <span class="text-primary">Acacia</span> Village
		</h1>
		<img
			use:lazyimage
			src={placeholder}
			data-src={Cottage1}
			loading="eager"
			class="w-4/4 h-full block lg:hidden object-cover rounded lg:img-animate"
			alt="Acacia Drinks being served in glasses"
		/>
		<div class="hidden lg:grid gap-4">
			<Carousel.Root bind:api class="p-0 m-0 img-animate">
				<Carousel.Content class="p-0 m-0 flex gap-1">
					<Carousel.Item class="m-0 p-0 basis-11/12">
						<img
							use:lazyimage
							src={placeholder}
							data-src={Cottage1}
							loading="eager"
							class="w-4/4 h-[60vh] object-cover img-animate"
							alt="Acacia Drinks being served in glasses"
						/>
					</Carousel.Item>
					<Carousel.Item class="m-0 p-0 basis-11/12">
						<img
							use:lazyimage
							src={placeholder}
							data-src={PoolRoom}
							loading="eager"
							class="w-4/4 h-[60vh] object-cover img-animate"
							alt="Acacia Drinks being served in glasses"
						/>
					</Carousel.Item>
					<Carousel.Item class="m-0 p-0 basis-11/12">
						<img
							use:lazyimage
							src={placeholder}
							data-src={Conference}
							loading="eager"
							class="w-4/4 h-[60vh] object-cover img-animate"
							alt="Acacia Drinks being served in glasses"
						/>
					</Carousel.Item>
				</Carousel.Content>
			</Carousel.Root>
			<div class="flex w-3/4 justify-evenly">
				<div class="flex first items-center w-full gap-4 group" tabindex="0" on:focus={handleFocus}>
					<div class="flex items-center w-full cursor-pointer">
						<div class="w-1/4">
							<div class="h-1 w-0 bg-primary group-focus:w-5/6 transition-all duration-300" />
						</div>
						<p
							class="flex-1 group-focus:text-primary group-focus:font-bold group-hover:text-primary"
						>
							Cottage
						</p>
					</div>
				</div>
				<div class="flex items-center w-full gap-4 group" on:focus={handleFocus} tabindex="1">
					<div class="flex items-center w-full cursor-pointer">
						<div class="w-1/4">
							<div class="h-1 w-0 bg-primary group-focus:w-5/6 transition-all duration-300" />
						</div>
						<p
							class="flex-1 group-focus:text-primary group-focus:font-bold group-hover:text-primary"
						>
							Pool Rooms
						</p>
					</div>
				</div>
				<div class="flex items-center w-full gap-4 group" tabindex="2" on:focus={handleFocus}>
					<div class="flex items-center w-full cursor-pointer">
						<div class="w-1/4">
							<div class="h-1 w-0 bg-primary group-focus:w-5/6 transition-all duration-300" />
						</div>
						<p
							class="flex-1 group-focus:text-primary group-focus:font-bold group-hover:text-primary"
						>
							Conferencing
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="w-full h-full flex justify-center items-center flex-col">
			<div class="lg:w-5/6 w-ful flex gap-4 flex-col">
				<!-- <h2 class="text-xl text-primary relative oasis">About Section</h2> -->
				<h1 class="text-5xl hidden lg:flex gap-2 leading-snug w-full text-textPrimary font-medium">
					Your Stay at <span class="text-primary">Acacia</span> Village
				</h1>
				<p class="text-md text-[#2D2E2E] font-[500] leading-loose">
					Acacia Village was established by Maris Ltd in Juba in 2009 to offer a comfortable and
					secure home-away-from-home. A secure accommodation and office compound, Acacia Village has
					earned a reputation for uncompromising quality and a relaxed family-like atmosphere.
				</p>
				<p class="text-md font-[500] text-[#2D2E2E] leading-loose">
					Acacia Village offers short and long term accommodation, office space, conferencing and
					recreational facilities. Our single ensuite apartments, poolside studios, and cottages are
					spacious and cosy. They include complementary laundry, high-speed internet, and satellite
					TV
				</p>
				<p class="text-md font-[500] text-[#2D2E2E] leading-loose">
					Leveraging the support of the Maris Group, Acacia Village is a leading example of what can
					be achieved with the right resources and expertise, in a challenging frontier market such
					as Juba. Leveraging the support of the Maris Group, Acacia Village is a leading example of
					what can be achieved with the right resources and expertise, in a challenging frontier
					market such as Juba.
				</p>
				<div>
					<Button
						href="/your-stay"
						label="Contact Us"
						class="shadow-none items-center bg-none rounded h-16 px-12"
					>
						<div class="flex items-center h-8 gap-4">
							<span>Explore Your Options</span>
						</div>
					</Button>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		display: grid;
		grid-column: start / end;
		grid-template-columns: subgrid;
	}
	section > div {
		display: grid;
		grid-column: content / content-end;
		grid-template-columns: 0.8fr 1fr;
		place-items: center;
	}
	@media (max-width: 768px) {
		section > div {
			grid-template-columns: 1fr;
		}
		.img-animate {
			animation: none;
			animation-range: 0%;
		}
	}
	.img-animate {
		transition: all 4s ease-in-out;
		animation: animate-in;
		animation-timeline: view();
		animation-fill-mode: forwards;
		animation-range: 0% 50%;
	}
	@keyframes animate-in {
		0% {
			opacity: 0.6;
			transform: translateX(-200px);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}
</style>
