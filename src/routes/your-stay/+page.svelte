<script>
	import ApartmentBooking from '$lib/components/apartment-booking.svelte';
	import CottageBooking from '$lib/components/cottage-booking.svelte';
	import Footer from '$lib/components/footer.svelte';
	import PoolRoomsBooking from '$lib/components/pool-rooms-booking.svelte';
	import UnderlinedTabs from '$lib/components/underlined-tabs.svelte';

	const tabs = [
		{ title: 'Cottages', content: 'cottage' },
		{ title: 'Pool Rooms', content: 'poolrooms' },
		{ title: 'Apartments', content: 'apartments' }
	];
</script>

<section>
	<UnderlinedTabs
		{tabs}
		handleTabClick={(e) => {
			var el = document.getElementById(e.content);
			window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
		}}
	/>
	<CottageBooking />
	<div id="poolrooms" class="w-full bg-[#DDE0C7] px-[120px] py-12">
		<PoolRoomsBooking />
	</div>
	<div id="poolrooms" class="w-full bg-white px-[120px] py-12">
		<ApartmentBooking />
	</div>
	<Footer />
</section>

<style>
	section {
		display: grid;
		grid-column: start / end;
		grid-template-columns: subgrid;
		background-color: #f6f6ef;
	}
	#poolrooms {
		display: grid;
		grid-column: start / end;
		place-items: center;
	}
</style>
