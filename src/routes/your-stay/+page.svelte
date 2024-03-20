<script>
	import CottageBooking from '$lib/components/cottage-booking.svelte';
	import PoolRoomsBooking from '$lib/components/pool-rooms-booking.svelte';
	import UnderlinedTabs from '$lib/components/underlined-tabs.svelte';

	const tabs = [
		{ title: 'Cottages', content: 'cottage' },
		{ title: 'Pool Rooms', content: 'poolrooms' }
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
