<script>
	import Banner from '../images/bannerImg.avif';
	import Food from '../images/Rectangle (1).avif';
	import Bed from '../images/bedroom.avif';
	import Lounge from '../images/Rectangle 20 (1).avif';
	import RadioGroup from './radio-group.svelte';
	import Button from './ui/button/button.svelte';
</script>

<section class=" bg-[#DDE0C7] grid items-center py-12 gap-12">
	<div class="w-full">
		<div class="w-full flex">
			<h2 class="text-xl text-left text-primary relative oasis">Accomadation</h2>
		</div>
		<div class="w-full flex justify-center items-center flex-col">
			<h1 class="text-5xl leading-snug w-full text-textPrimary font-medium">
				Book a <span class="text-primary">Room</span>
			</h1>
		</div>
		<div class="w-full grid grid-cols-3 gap-4">
			<div class="w-full col-span-2">
				<div class="bg-white flex py-4 rounded-tr rounded-tl">
					<h1 class="px-4">Luxury</h1>
					<h1 class="px-4">Apartments</h1>
					<h1 class="px-4">Cottages</h1>
				</div>
				<div class="flex flex-col w-full grid-rows-2 gap-2">
					<div>
						<img src={Bed} alt="" class="w-full rounded" />
					</div>
					<div class="grid grid-cols-4 gap-4">
						<img src={Bed} alt="" class="w-full rounded object-cover h-32" />
						<img src={Food} alt="" class="w-full rounded object-cover h-32" />
						<img src={Banner} alt="" class="w-full rounded object-cover h-32" />
						<img src={Lounge} alt="" class="w-full rounded object-cover h-32" />
					</div>
				</div>
			</div>
			<div class="bg-white h-full p-6 flex flex-col gap-4 justify-between rounded">
				<h1 class="font-bold">Choose Room Type</h1>
				<div class="flex-1">
					<RadioGroup />
				</div>
				<Button
					href="/login"
					label="Contact Us"
					class="shadow-none items-center bg-none rounded h-16 px-12"
				>
					<div class="flex items-center h-8 gap-4">
						<span>Proceed</span>
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
			</div>
		</div>
	</div>
	<div class="w-full"></div>
</section>

<style>
	section {
		display: grid;
		grid-column: start / end;
		grid-template-columns: subgrid;
		place-items: center;
	}
	section > div {
		display: grid;
		grid-column: content / content-end;
		place-items: center;
		gap: 1em;
	}
	.oasis {
		position: relative;
		padding: 0em 1.5em;
		width: 15ch;
	}
	.oasis::before {
		content: ' ';
		display: block;
		height: 2px;
		width: 22px;
		position: absolute;
		top: 50%;
		left: 0px;
		background: #717c26;
	}
	.oasis::after {
		content: ' ';
		display: block;
		height: 2px;
		width: 22px;
		position: absolute;
		top: 50%;
		right: 16px;
		background: #717c26;
	}
</style>
