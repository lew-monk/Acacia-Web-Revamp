<script>
	import RadioGroup from './radio-group.svelte';
	import Button from './ui/button/button.svelte';
	import Carousel from './carousel.svelte';
	import LuxuryTab from './luxury-tab.svelte';
	import CottageTabs from './cottage-tabs.svelte';
	import PoolRoomTabs from './pool-room-tabs.svelte';
	import Pool from '$lib/images/pooloom-1.avif';
	import Pool2 from '$lib/images/Pool.avif';

	let roomType = 'cottages';
	const images = [Pool, Pool2];
</script>

<div class="car-container carousel h-[80vh] flex justify-center items-center w-full relative">
	<Carousel jump={true} {images} />
	<div class="overlay h-full w-full bg-black absolute top-0 left-0 opacity-50"></div>
	<div class="z-10 absolute text-white grid gap-8 text-center">
		<h1 class="text-2xl font-bold">Accommodation</h1>
	</div>
</div>
<section class=" bg-[#DDE0C7] grid items-center py-12 gap-12">
	<div class="w-full">
		<div class="w-full flex justify-center items-center flex-col">
			<h1 class="text-5xl leading-snug w-full text-textPrimary font-medium">
				Book a <span class="text-primary">Room</span>
			</h1>
		</div>
		<div class="w-full grid grid-cols-3 gap-4">
			<div class="w-full col-span-2">
				<div class="bg-white flex pt-4 pb-2 rounded-tr rounded-tl">
					<!-- <button
						on:click={() => (roomType = 'apartment')}
						class={roomType !== 'apartment' ? `px-4` : `px-2 border-b-4 border-primary`}
						>Apartments</button
					> -->
					<button
						class={roomType !== 'cottages' ? `px-4` : `px-2 border-b-4 border-primary`}
						on:click={() => (roomType = 'cottages')}>Cottages</button
					>
					<button
						class={roomType !== 'pool' ? `px-4` : `px-2 border-b-4 border-primary`}
						on:click={() => (roomType = 'pool')}>Pool Rooms</button
					>
				</div>
				{#if roomType === 'apartment'}
					<LuxuryTab />
				{:else if roomType === 'cottages'}
					<CottageTabs />
				{:else}
					<PoolRoomTabs />
				{/if}
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
	.car-container {
		display: grid;
		grid-column: start / end;
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
