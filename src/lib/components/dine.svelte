<script>
	import Food from '../images/Images.avif';
	import { lazyimage } from 'svelte-lazyimage-cache';
	const placeholder = 'https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif';
</script>

<section class=" bg-[#F6F6EF] flex items-center" id="stay">
	<div class="py-24">
		<img
			use:lazyimage
			src={placeholder}
			data-src={Food}
			loading="eager"
			class="w-4/4 h-full object-cover rounded img-animate"
			alt="Acacia Drinks being served in glasses"
		/>
		<div class="w-full h-full flex justify-center items-center flex-col">
			<div class="w-5/6 flex gap-4 flex-col">
				<!-- <h2 class="text-xl text-primary relative oasis">About Section</h2> -->
				<h1 class="text-5xl leading-snug w-full text-textPrimary font-medium">
					Dining <span class="text-primary">Experiences</span>
				</h1>
				<p class="text-md text-[#2D2E2E] font-[500] leading-loose">
					Acacia Village Bar & Restaurant takes pride in it menu that has delightful array of dishes
					crafted with genuine flavours and locally-sourced ingredients. Our offerings range from
					hearty stews and succulent grilled meats to fragrant rice dishes and invigorating
					beverages, all elegantly reflecting the vibrant cultural heritage of the region
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
	.img-animate {
		transition: all 2s ease-in-out;
		animation: animate-in;
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
