<script>
	import Carousel from '$lib/components/carousel.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Cottages from '$lib/images/Gate.avif';
	import Pool from '$lib/images/Pool-2.avif';
	const images = [Cottages];
</script>

<section class="">
	<div class=" carousel lg:h-[80vh] h-[60vh] flex justify-center items-center w-full relative">
		<Carousel jump={true} {images} />
		<div class="overlay h-full w-full bg-black absolute top-0 left-0 opacity-50"></div>
		<div class="z-10 absolute text-white grid gap-8 text-center">
			<h1 class="text-2xl font-bold">Safety and Security</h1>
		</div>
	</div>
	<div class="secondary bg-[#DDE0C7]">
		<div class="lg:py-24 py-12 bg-white lg:px-[120px] px-[20px] rounded grid gap-4 lg:grid-cols-2">
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
					<h1 class="text-5xl hidden leading-snug w-full text-textPrimary font-medium">
						Safety & Security
					</h1>
					<p class="text-md text-[#2D2E2E] font-[500] leading-loose">
						At Acacia Village, your security is our utmost priority. Our premises are equipped with
						state-of-the-art security systems, including 24/7 surveillance cameras, secure access
						controls, and trained security personnel who are always vigilant and ready to respond to
						any situation. We have taken extensive measures to ensure the safety of our guests,
						offering a secure accommodation and office compound. We have taken the following
						extensive measures to ensure the safety of our guests:
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
		<div class="lg:py-24 py-12 lg:px-[120px] px-[20px] rounded grid gap-4 lg:grid-cols-2">
			<h1 class="text-xl lg:hidden block leading-snug w-full text-textPrimary font-medium">
				ENVIRONMENTAL & SOCIAL GOVERNANCE
			</h1>
			<img
				src={Pool}
				class="w-4/4 h-full lg:hidden object-cover img-2"
				alt="Acacia Drinks being served in glasses img-2"
				loading="eager"
			/>
			<div class="w-full h-full flex justify-center items-center flex-col">
				<div class="lg:w-5/6 flex gap-4 flex-col">
					<!-- <h2 class="text-xl text-primary relative oasis">About Section</h2> -->
					<h1 class="text-4xl hidden lg:block leading-snug w-full text-textPrimary font-medium">
						ENVIRONMENTAL & SOCIAL GOVERNANCE
					</h1>
					<p class="text-md text-[#2D2E2E] font-[500] leading-loose">
						As a leading private business in Juba, Acacia Village is committed to the highest
						standards of business integrity, social responsibility and environmental impact. From
						water recycling to a reduction in single-use plastic, we are constantly striving to
						minimise our carbon footprint. In 2016, we installed a captive solar plant with our
						sister company Equator Energy, which has reduced our diesel consumption by more than
						50%. <br /> With the support of Maris’ dedicated E&S Officer, Acacia Village developed
						its own Environmental, Social and Governance Management System (ESMS) in 2018 in
						accordance with the IFC Performance Standards and World Bank guidelines.<br /> Acacia Village
						is proud to support the local community through direct employment and a range of outreach
						programmes including the funding of the Acacia football team. In addition to the local labour
						laws of South Sudan, we subscribe to the core labour standards of the International Labour
						Organisation (ILO). In terms of corporate governance and business integrity, our policies
						include Anti-Bribery and Corruption, Anti-Money Laundering, and Whistleblowing.
					</p>
				</div>
			</div>
			<img
				src={Pool}
				class="w-4/4 h-full object-cover hidden lg:flex img-2"
				alt="Acacia Drinks being served in glasses img-2"
				loading="eager"
			/>
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
