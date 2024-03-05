<script>
	import AccomodationImages from './accomodation-images.svelte';
	import PoolRoom1 from '$lib/images/pooloom-1.avif';

	let images = [PoolRoom1];
</script>

<AccomodationImages {images} />
