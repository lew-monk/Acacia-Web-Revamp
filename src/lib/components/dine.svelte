<script>
	import Food from '../images/Kitchen3.jpg';
	import { lazyimage } from 'svelte-lazyimage-cache';
	const placeholder = 'https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif';
</script>

<section class=" bg-[#F6F6EF] flex items-center" id="stay">
	<div class="pt-12 lg:pt-24 pb-24 gap-4">
		<h1
			class="text-2xl block lg:hidden leading-snug w-full text-textPrimary font-semibold lg:font-medium"
		>
			Dining <span class="text-primary">Experiences</span>
		</h1>
		<img
			use:lazyimage
			src={placeholder}
			data-src={Food}
			loading="lazy"
			class="w-4/4 lg:hidden object-contain rounded lg:img-animate"
			alt="Acacia Drinks being served in glasses"
		/>
		<img
			use:lazyimage
			src={placeholder}
			data-src={Food}
			loading="lazy"
			class="w-4/4 h-full object-cover hidden lg:block rounded img-animate"
			alt="Acacia Drinks being served in glasses"
		/>
		<div class="w-full h-full flex justify-center items-center flex-col">
			<div class="lg:w-5/6 w-full flex gap-4 flex-col">
				<!-- <h2 class="text-xl text-primary relative oasis">About Section</h2> -->
				<h1 class="text-5xl hidden lg:flex gap-2 leading-snug w-full text-textPrimary font-medium">
					Dining <span class="text-primary">Experiences</span>
				</h1>
				<p class="text-md text-[#2D2E2E] font-[500] leading-loose">
					Acacia Village Bar & Restaurant takes pride in it menu that has delightful array of dishes
					crafted with genuine flavours and locally-sourced ingredients.
				</p>
				<p class="text-md text-[#2D2E2E] font-[500] leading-loose">
					Our offerings range from hearty stews and succulent grilled meats to fragrant rice dishes
					and invigorating beverages, all elegantly reflecting the vibrant cultural heritage of the
					region.
				</p>
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
		grid-template-columns: 1fr 1fr;
		place-items: center;
	}
	@media (max-width: 768px) {
		section > div {
			grid-template-columns: 1fr;
		}
	}
	.img-animate {
		transition: all 2s ease-in-out;
		animation-timeline: view();
		animation-fill-mode: forwards;
		animation-range: -20%;
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
