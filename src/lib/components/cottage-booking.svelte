<script lang="ts">
	import CottageLast from '$lib/images/cottagelast.jpg';
	import Cottage from '$lib/images/Cottage5.jpg';
	import Cottage2 from '$lib/images/Cottage2.jpg';
	import * as Carousel from '$lib/components/ui/carousel';
	import Autoplay from 'embla-carousel-autoplay';
	import UnderlinedTabs from './underlined-tabs.svelte';
	import Bed from '$lib/images/svg/bed.svelte';
	import Lamp from '$lib/images/svg/lamp.svelte';
	import Desk from '$lib/images/svg/desk.svelte';
	import Cupboards from '$lib/images/svg/cupboards.svelte';
	import Button from './ui/button/button.svelte';
	import BookDialog from './book-dialog.svelte';

	const roomTabs = [{ title: 'Ammenities', content: 'poolrooms' }];
	let tab = 'cottages';
	let selectedDetail = 'furniture';
</script>

<div id="cottage" class="grid md:grid-cols-2 py-16 gap-20">
	<Carousel.Root
		class="p-0 m-0 h-full img-animate"
		plugins={[
			Autoplay({
				delay: 4000,
				jump: true,
				duration: 500
			})
		]}
	>
		<Carousel.Content class="p-0 m-0 flex gap-1">
			<Carousel.Item class="m-0 p-0 basis-11/12">
				<img
					src={Cottage}
					loading="eager"
					class="w-4/4 h-[60vh] object-cover img-animate"
					alt="Acacia Drinks being served in glasses"
				/>
			</Carousel.Item>
			<Carousel.Item class="m-0 p-0 basis-11/12">
				<img
					src={Cottage2}
					loading="eager"
					class="w-4/4 h-[60vh] object-cover img-animate"
					alt="Acacia Drinks being served in glasses"
				/>
			</Carousel.Item>
			<Carousel.Item class="m-0 p-0 basis-11/12">
				<img
					src={CottageLast}
					loading="eager"
					class="w-4/4 h-[60vh] object-cover img-animate"
					alt="Acacia Drinks being served in glasses"
				/>
			</Carousel.Item>
		</Carousel.Content>
	</Carousel.Root>
	<div class="flex flex-col gap-4">
		<h1 class="text-5xl block text-primary font-semibold">Cottages</h1>
		<p class="block text-md font-light">
			Our country-style cottages are built to a very high standard. They come fully furnished with
			double bed (or 2 singles), bedside cabinets with lamp, work station, fridge, cupboards,
			satellite TV, Wifi and air-conditioning.
		</p>

		<UnderlinedTabs
			tabs={roomTabs}
			handleTabClick={(clickedTab) => {
				tab = clickedTab.content;
			}}
		/>
		<div class="h-52">
			{#if tab === 'cottage'}
				<div class="grid gap-4">
					<div class="flex">
						<h1 class="w-40 font-semibold">Room Type</h1>
						<p>20ft</p>
					</div>
					<div class="flex">
						<h1 class="w-40 font-semibold">Beds</h1>
						<p>Double beds or 2 Singles</p>
					</div>
				</div>
			{:else}
				<div class="grid lg:grid-cols-4 grid-cols-3">
					<div class="w-40">
						<div class="grid grid-cols-1 py-2">
							<button
								on:click={() => (selectedDetail = 'furniture')}
								class="w-full text-left block font-semibold">Furniture</button
							>
							<div
								class:selectedDetail={selectedDetail === 'furniture'}
								class="w-1/12 h-1 bg-transparent transition-all duration-300"
							/>
						</div>
						<div class="py-2">
							<button
								on:click={() => (selectedDetail = 'other')}
								class="w-full text-left font-semibold">Other</button
							>
							<div
								class:selectedDetail={selectedDetail === 'other'}
								class="w-1/12 h-1 bg-transparent transition-all duration-300"
							></div>
						</div>
					</div>
					<div class="flex col-span-2">
						{#if selectedDetail === 'furniture'}
							<div class="grid gap-2">
								<div class="flex py-2 gap-2 items-center">
									<Bed />
									<p>Double beds</p>
								</div>
								<div class="flex py-2 gap-2 items-center">
									<Desk />
									<p>Writing Desk with chair</p>
								</div>
								<div class="flex py-2 gap-2 items-center">
									<Cupboards />
									<p>Cupboards</p>
								</div>
							</div>
						{:else}
							<div class="grid">
								<div class="flex py-2 gap-2 items-center">
									<Bed />
									<p>Wi-fi</p>
								</div>
								<div class="flex py-2 gap-2 items-center">
									<Lamp />
									<p>Air Conditioning</p>
								</div>
								<div class="flex py-2 gap-2 items-center">
									<Cupboards />
									<p>Safe</p>
								</div>
								<div class="flex py-2 gap-2 items-center">
									<Lamp />
									<p>Fridge</p>
								</div>
							</div>
						{/if}
					</div>
				</div>
			{/if}
		</div>
		<div class="w-full border-t border-primary">
			<BookDialog>
				<Button class="shadow-none items-center bg-none rounded h-16 my-4 px-12">
					Book Your Stay
				</Button>
			</BookDialog>
		</div>
	</div>
</div>

<style>
	#cottage {
		grid-column: content / content-end;
	}
	.selectedDetail {
		background-color: #717c26;
		width: 25%;
	}
</style>
