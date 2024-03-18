<script>
	import Carousel from '$lib/components/carousel.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Chef from '$lib/images/Convert.avif';
	import Andy from '$lib/images/Management.jpeg';
	import Mary from '$lib/images/Mary.jpeg';
	import Micheal from '$lib/images/Mike Murima Staff Photo.jpg';
	import Emmanuel from '$lib/images/Management.jpg';

	const images = [Chef];
</script>

<section class="">
	<div class=" carousel lg:h-[80vh] h-[60vh] flex justify-center items-center w-full relative">
		<Carousel jump={true} {images} />
		<div class="overlay h-full w-full bg-black absolute top-0 left-0 opacity-50"></div>
		<div class="z-10 absolute text-white grid gap-8 text-center">
			<h1 class="text-2xl font-bold">Our Team</h1>
		</div>
	</div>
	<div class="secondary bg-[#DDE0C7]">
		<div class="w-full bg-white text-center flex justify-center py-12">
			<div class="w-2/2 h-full gap-4 flex justify-center items-center flex-col">
				<h1 class="text-base lg:w-1/2 w-10/12 leading-snug text-textPrimary font-bold">
					Our staff consists expatriates and nationals who are fully dedicated to ensure your stay
					at Acacia Village is a memorable one.
				</h1>

				<h3 class="lg:w-3/4 w-11/12">
					The team is well trained to provide all of our residents with the best level of service
					possible and will go the extra mile to make our guests feel at home during their stay. We
					are proud that over half of our staff are female and close to eighty percent are South
					Sudanese.
				</h3>
			</div>
		</div>
		<div
			class="lg:py-24 py-12 lg:px-[120px] px-[20px] rounded grid gap-4 lg:grid-cols-8 grid-cols-1"
		>
			<h1 class="text-2xl lg:hidden block leading-snug w-full text-textPrimary font-medium">
				ANDY HARDY
			</h1>
			<img
				src={Andy}
				loading="eager"
				class="w-4/4 col-span-2 items-center h-full object-cover rounded"
				alt="Acacia Drinks being served in glasses"
			/>
			<div class="w-full h-full flex justify-center lg:col-span-6 items-center flex-col">
				<div class="lg:w-5/6 flex gap-4 flex-col">
					<!-- <h2 class="text-xl text-primary relative oasis">About Section</h2> -->
					<h1 class="text-5xl leading-snug hidden lg:block w-full text-textPrimary font-medium">
						ANDY HARDY
					</h1>
					<p class="text-md text-[#2D2E2E] font-[500] leading-loose">
						Andy serves as the General Manager of Acacia Village. With a career spanning back to
						1998, Andy has been actively engaged in the tourism and hospitality industry, operating
						in various countries such as South Africa, Botswana, Zimbabwe, and Mozambique. Andy’s
						extensive expertise is invaluable in effectively overseeing the business operations
						within a challenging and multifaceted setting.
					</p>
				</div>
			</div>
		</div>
		<div
			class="lg:py-24 py-12 lg:px-[120px] px-[20px] bg-white rounded grid gap-4 lg:grid-cols-8 grid-cols-1"
		>
			<h1 class="text-2xl lg:hidden block leading-snug w-full text-textPrimary font-medium">
				MARYLANE GONZAGA
			</h1>
			<img
				src={Mary}
				loading="eager"
				class="w-4/4 lg:hidden block lg:col-span-2 items-center h-full object-cover rounded"
				alt="Acacia Drinks being served in glasses"
			/>
			<div class="w-full h-full flex justify-center lg:col-span-6 items-center flex-col">
				<div class="lg:w-5/6 flex gap-4 flex-col">
					<!-- <h2 class="text-xl text-primary relative oasis">About Section</h2> -->
					<h1 class="text-5xl hidden lg:block leading-snug w-full text-textPrimary font-medium">
						MARYLANE GONZAGA
					</h1>

					<p class="text-md text-[#2D2E2E] font-[500] leading-loose">
						Marylane is the Assistant Camp Manager. She has been at Acacia Village for more than a
						decade, playing a crucial role in its transformation into the remarkable hotel it is
						today. With extensive hospitality experience in Juba, she excels in various aspects, be
						it assisting with visa arrangements, ensuring your shirts are impeccably clean and
						pressed, or coordinating your onward travel plans. Marylane is consistently prepared to
						offer her assistance and support.
					</p>
				</div>
			</div>
			<img
				src={Mary}
				loading="eager"
				class="w-4/4 hidden lg:block col-span-2 items-center h-full object-cover rounded"
				alt="Acacia Drinks being served in glasses"
			/>
		</div>
		<div
			class="lg:py-24 py-12 lg:px-[120px] px-[20px] rounded grid gap-4 lg:grid-cols-8 grid-cols-1"
		>
			<h1 class="text-2xl lg:hidden block leading-snug w-full text-textPrimary font-medium">
				MICHAEL MURIMA
			</h1>
			<img
				src={Micheal}
				loading="eager"
				class="w-4/4 col-span-2 items-center h-full object-cover rounded"
				alt="Acacia Drinks being served in glasses"
			/>
			<div class="w-full h-full flex justify-center lg:col-span-6 items-center flex-col">
				<div class="lg:w-5/6 flex gap-4 flex-col">
					<!-- <h2 class="text-xl text-primary relative oasis">About Section</h2> -->
					<h1 class="text-5xl leading-snug hidden lg:block w-full text-textPrimary font-medium">
						MICHAEL MURIMA
					</h1>
					<p class="text-md text-[#2D2E2E] font-[500] leading-loose">
						Michael is our F&amp;B Manager. He has a great passion for his role. He began his
						journey at Moyo Restaurant in Johannesburg, South Africa back in 2004. He has refined
						his expertise with different establishments spanning South and North Africa. With
						Michael in charge, you can rest assured that your dining experience will be exceptional
						and enjoyable.
					</p>
				</div>
			</div>
		</div>

		<div
			class="lg:py-24 py-12 lg:px-[120px] bg-white px-[20px] rounded grid gap-4 lg:grid-cols-8 grid-cols-1"
		>
			<h1 class="text-2xl lg:hidden block leading-snug w-full text-textPrimary font-medium">
				EMMANUEL KYALO
			</h1>
			<img
				src={Emmanuel}
				loading="eager"
				class="w-4/4 lg:hidden block lg:col-span-2 items-center h-full object-cover rounded"
				alt="Acacia Drinks being served in glasses"
			/>
			<div class="w-full h-full flex justify-center lg:col-span-6 items-center flex-col">
				<div class="lg:w-5/6 flex gap-4 flex-col">
					<!-- <h2 class="text-xl text-primary relative oasis">About Section</h2> -->
					<h1 class="text-5xl hidden lg:block leading-snug w-full text-textPrimary font-medium">
						EMMANUEL KYALO
					</h1>

					<p class="text-md text-[#2D2E2E] font-[500] leading-loose">
						Emmanuel serves as the Finance Manager. He joined Acacia Village in March 2020, bringing
						with him extensive experience in the fields of Finance and Accounting. He has worked
						with firms in Kenya’s hospitality and horticulture sectors, acquiring valuable expertise
						along the way. Emmanuel holds a Master’s Degree in Finance (KCA University) and is a
						Certified Public Accountant of Kenya (CPA-K), showcasing his dedication to professional
						growth and proficiency in his field.
					</p>
				</div>
			</div>
			<img
				src={Emmanuel}
				loading="eager"
				class="w-4/4 hidden lg:block col-span-2 items-center h-full object-cover rounded"
				alt="Acacia Drinks being served in glasses"
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
</style>
