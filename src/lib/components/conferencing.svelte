<script>
	import Conference from '../images/Conference Image.jpg';
</script>

<section class=" bg-[#DDE0C7] flex items-center" id="stay">
	<div class="py-12 lg:py-24">
		<div class="w-full h-full flex gap-4 justify-center items-center flex-col">
			<h1
				class="text-2xl block gap-2 lg:hidden leading-snug w-full text-textPrimary font-semibold lg:font-medium"
			>
				Conferences, Workshops and <span class="text-primary">Events</span>
			</h1>
			<img
				src={Conference}
				class="w-4/4 lg:hidden object-contain rounded lg:img-animate bg-[url(/Conference.jpg)]"
				alt="Acacia Drinks being served in glasses img-animate"
			/>
			<div class="lg:w-5/6 w-full flex gap-4 flex-col">
				<!-- <h2 class="text-xl text-primary relative oasis">About Section</h2> -->
				<h1 class="text-5xl hidden lg:block leading-snug w-full text-textPrimary font-medium">
					Conferences, Workshops and <span class="text-primary">Events</span>
				</h1>
				<p class="text-md text-[#2D2E2E] font-[500] leading-loose">
					We offer a range of both indoor and outdoor event and conference facilities, for groups of
					up to 50 people. Our packages can be tailored to your needs, including tea, coffee,
					freshly made snacks, and lunch catering if required.
				</p>
				<p class="text-md text-[#2D2E2E] font-[500] leading-loose">
					Our conference rooms are equipped with video technology to accommodate virtual
					participants. Whether you’re hosting a themed workshop event or an executive meeting,
					Acacia Village is equiped to meet your needs.
				</p>
			</div>
		</div>

		<img
			src={Conference}
			class="w-4/4 hidden lg:flex rounded h-full object-cover img-animate bg-[url(/Conference.jpg)]"
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
	@media (max-width: 768px) {
		section > div {
			display: grid;
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
			transform: translateX(200px);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}
</style>
