<script>
	import BannerImg from '../images/bannerImg.avif';
	import DatePicker from './date-picker.svelte';
	import { Button } from './ui/button';
	import Select from './select.svelte';
	import Carousel from './carousel.svelte';
</script>

<section class="relative h-[80vh]">
	<div class="w-full bg-bgDark flex justify-center flex-col">
		<div class="w-5/6 flex gap-8 flex-col -mt-40 ml-[120px]">
			<!-- <h2 class="text-xl text-primary relative oasis">An Oasis in Juba</h2> -->
			<h1 class="text-6xl leading-snug text-textPrimary font-medium">
				Welcome to Acacia Village - <span class="text-primary">An Oasis in Juba</span>
			</h1>
			<!-- <p class="text-base w-10/12 leading-snug font-medium">
				Welcome to one of Juba’s safest and most comfortable residential compounds.
			</p> -->
			<div>
				<Button href="/book" class="shadow-none items-center bg-none rounded h-16 px-12">
					<div class="flex items-center h-8 gap-4">
						<span>Book Now</span>
						<span>
							<svg
								width="25"
								height="24"
								viewBox="0 0 25 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M20.1446 13.1063L20.071 13.1915L16.495 16.922C16.1129 17.3207 15.4798 17.334 15.0811 16.9519C14.7131 16.5991 14.6734 16.0326 14.9701 15.6339L15.0512 15.538L17.0061 13.4991L4.34914 13.4995C3.8363 13.4995 3.41364 13.1134 3.35587 12.6161L3.34914 12.4995C3.34914 11.9866 3.73518 11.564 4.23252 11.5062L4.34914 11.4995L17.0071 11.4991L15.0512 9.46007C14.6691 9.06137 14.6824 8.42835 15.0811 8.04617C15.4492 7.69339 16.0169 7.67766 16.4026 7.99091L16.495 8.07607L20.1049 11.8426L20.1746 11.9338L20.2246 12.0149L20.2713 12.1113L20.3148 12.2379C20.3819 12.4811 20.3594 12.751 20.2226 12.9898L20.1446 13.1063Z"
									fill="white"
								/>
							</svg>
						</span>
					</div>
				</Button>

				<Button
					variant="outline"
					href="/contact"
					class="shadow-none bg-none border-2 border-primary rounded h-16 px-12">Contact Us</Button
				>
			</div>
		</div>
	</div>
	<div class="w-full h-full">
		<!-- <img
			src={BannerImg}
			class="object-cover w-full"
			alt="Acacia Drinks being served in glasses"
			loading="lazy"
		/> -->
		<Carousel />
	</div>
	<aside
		class="h-24 flex justify-center px-8 items-center gap-4 rounded w-3/4 bg-white absolute -bottom-0 transform translate-y-1/2 left-1/2 transform -translate-x-1/2"
	>
		<DatePicker />
		<DatePicker />
		<Select />
		<Button href="/contact" class="shadow-none bg-none border-2 border-primary rounded h-12 px-12"
			>Check Availability</Button
		>
	</aside>
</section>

<style>
	section {
		display: grid;
		grid-column: start / end;
		grid-template-columns: 1fr 1fr;
	}
</style>
