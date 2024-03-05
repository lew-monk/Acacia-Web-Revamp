<script>
	import Carousel from '$lib/components/carousel.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Cottages from '$lib/images/F.avif';
	import Bar from '$lib/images/Bar.avif';
	import Outdoor from '$lib/images/DSC00375.avif';
	import Outdoor2 from '$lib/images/DSC_0768-HDR.avif';

	const images = [Bar, Cottages, Outdoor];
</script>

<section class="">
	<div class=" carousel h-[80vh] flex justify-center items-center w-full relative">
		<Carousel jump={true} {images} />
		<div class="overlay h-full w-full bg-black absolute top-0 left-0 opacity-70"></div>
		<div class="z-10 absolute text-white grid gap-8 text-center">
			<h1 class="text-2xl font-bold">About Us</h1>
			<h3 class="font">Home - About us</h3>
		</div>
	</div>
	<div class="secondary bg-[#DDE0C7]">
		<div class="py-24 px-[120px] rounded grid grid-cols-2">
			<img
				src={Outdoor2}
				class="w-4/4 h-full object-cover rounded"
				alt="Acacia Drinks being served in glasses"
			/>
			<div class="w-full h-full flex justify-center items-center flex-col">
				<div class="w-5/6 flex gap-4 flex-col">
					<!-- <h2 class="text-xl text-primary relative oasis">About Section</h2> -->
					<h1 class="text-5xl leading-snug w-full text-textPrimary font-medium">
						About <span class="text-primary">Acacia</span> Village
					</h1>
					<p class="text-md text-[#2D2E2E] font-[500] leading-loose">
						Acacia Village was established by Maris Ltd in Juba in 2009 to offer a comfortable and
						secure home-away-from-home for the international community operating in the region. <br
						/> A secure accommodation and office compound, Acacia Village has earned a reputation for
						uncompromising quality and a relaxed family-like atmosphere. Residents include individuals
						from a broad range of geographies and sectors, including development, humanitarian, and aviation.
					</p>
					<p class="text-md font-[500] text-[#2D2E2E] leading-loose">
						Acacia Village offers a range of accommodation, office, conferencing, transport, and
						sports facilities. Our single apartments, poolside studios, and cottages all come
						ensuite and fully furnished. They include complementary laundry, high-speed internet,
						and satellite TV. Leveraging the support of the Maris Group, Acacia Village is a leading
						example of what can be achieved with the right resources and expertise, in a challenging
						frontier market such as Juba.
					</p>
					<div></div>
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
</style>
