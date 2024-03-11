<script>
	import Food from '../images/conference-small.jpeg';
	import { lazyimage } from 'svelte-lazyimage-cache';
	const placeholder = 'https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif';
</script>

<section class=" bg-[#DDE0C7] flex items-center" id="stay">
	<div class="py-24">
		<div class="w-full h-full flex justify-center items-center flex-col">
			<div class="w-5/6 flex gap-4 flex-col">
				<!-- <h2 class="text-xl text-primary relative oasis">About Section</h2> -->
				<h1 class="text-5xl leading-snug w-full text-textPrimary font-medium">
					Conference, Meetings and <span class="text-primary">Events</span>
				</h1>
				<p class="text-md text-[#2D2E2E] font-[500] leading-loose">
					We offer both indoor and outdoor event spaces and conference facilities tailored to your
					needs. Whether you're hosting a themed event or an executive meeting, Acacia Village
					ensures top-notch service that meets your satisfaction.
				</p>
			</div>
		</div>

		<img
			use:lazyimage
			src={placeholder}
			data-src={Food}
			class="w-4/4 rounded h-full object-cover img-animate"
			alt="Acacia Drinks being served in glasses img-animate"
		/>
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
			transform: translateX(200px);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}
</style>
