<script>
	import Carousel from '$lib/components/carousel.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Pool from '$lib/images/Solar.jpg';
	import Compound from '$lib/images/Compound1.jpg';
	const images = [Pool];
</script>

<section class="">
	<div class=" carousel lg:h-[80vh] h-[60vh] flex justify-center items-center w-full relative">
		<Carousel jump={true} {images} />
	</div>
	<div class="secondary bg-[#DDE0C7]">
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
				src={Compound}
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
