<script>
	import Footer from '$lib/components/footer.svelte';
	import Cottages from '$lib/images/Gate.avif';
	const images = [Cottages];
</script>

<section class="">
	<div class="secondary bg-[#DDE0C7]">
		<div class="lg:py-24 py-12 lg:px-[120px] px-[20px] rounded grid gap-4 lg:grid-cols-2">
			<h1 class="text-2xl block lg:hidden leading-snug w-full text-textPrimary font-medium">
				Safety & Security
			</h1>
			<img
				src={Cottages}
				loading="eager"
				class="w-4/4 h-full object-cover"
				alt="Acacia Drinks being served in glasses"
			/>
			<div class="w-full h-full flex justify-center items-center flex-col">
				<div class="lg:w-5/6 flex gap-4 flex-col">
					<!-- <h2 class="text-xl text-primary relative oasis">About Section</h2> -->
					<h1 class="text-5xl hidden lg:block leading-snug w-full text-textPrimary font-medium">
						Safety & Security
					</h1>
					<p class="text-md text-[#2D2E2E] font-[500] leading-loose">
						At Acacia Village, your security is our utmost priority. Our premises are equipped with
						state-of-the-art security systems, including 24/7 surveillance cameras, secure access
						controls, and trained security personnel who are always vigilant and ready to respond to
						any situation. We have taken the following extensive measures to ensure the safety of
						our guests:
					</p>
					<ol class="list-disc pl-4">
						<li>
							High standard gate control and permanent security presence at all access points Min
						</li>
						<li>Two meter high perimeter wall, with 2 layers of razor wire</li>
						<li>24 hour CCTV coverage with standby alarm-response team</li>
						<li>
							Secure strong room with reinforced steel doors, equipped with satellite phone, water
							and food supplies.
						</li>
					</ol>
				</div>
			</div>
		</div>
	</div>
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
	.secondary {
		grid-column: start / end;
	}
	.img-2 {
		transition: all 2s ease-in-out;
		animation: animate-in-left;
		animation-timeline: view();
		animation-fill-mode: forwards;
		animation-range: -20%;
	}
	@keyframes animate-in-left {
		0% {
			opacity: 0.6;
			transform: translateX(200px);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}
	img {
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
