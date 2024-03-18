<script>
	import Pool from '$lib/images/bedroom.avif';
	import { lazyimage } from 'svelte-lazyimage-cache';
	import { Button } from './ui/button';

	const placeholder = 'https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif';
</script>

<section class=" bg-[#F6F6EF] py-12 flex items-center" id="stay">
	<div class="pt-24 pb-12 gap-4">
		<h1
			class="text-2xl block lg:hidden leading-snug w-full text-textPrimary font-semibold lg:font-medium"
		>
			Your Stay at <br /> <span class="text-primary">Acacia</span> Village
		</h1>
		<img
			use:lazyimage
			src={placeholder}
			data-src={Pool}
			loading="eager"
			class="w-4/4 h-full object-cover rounded lg:img-animate"
			alt="Acacia Drinks being served in glasses"
		/>
		<div class="w-full h-full flex justify-center items-center flex-col">
			<div class="lg:w-5/6 w-ful flex gap-4 flex-col">
				<!-- <h2 class="text-xl text-primary relative oasis">About Section</h2> -->
				<h1 class="text-5xl hidden lg:flex gap-2 leading-snug w-full text-textPrimary font-medium">
					Your Stay at <span class="text-primary">Acacia</span> Village
				</h1>
				<p class="text-md text-[#2D2E2E] font-[500] leading-loose">
					Our range of air-conditions ensuite apartments and rooms all boast a double bed, mosquito
					net, satellite TV, mini-fridge, and workstation. We provide clean, cosy, and functional
					accommodation options, all managed by our friendly team of staff. Whether you’re on a
					long-term work rotation or a weekend getaway, you can be sure of a relaxing stay.
				</p>
				<p class="text-md font-[500] text-[#2D2E2E] leading-loose">
					Plus we give you peace of mind: our compound is guarded 24/7 by Veteran Security Services,
					South Sudan’s largest private security company. It is surrounded by a fully lit 2.2m
					permitter wall, lined with anti-vehicle-ram protection, and topped with both electric and
					razor wire.
				</p>
				<div>
					<Button
						href="/book"
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
