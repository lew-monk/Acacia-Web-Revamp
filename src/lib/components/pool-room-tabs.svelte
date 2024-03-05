<script>
	import AccomodationImages from './accomodation-images.svelte';
	import PoolRoom1 from '$lib/images/pooloom-1.avif';
	import PoolRoom2 from '$lib/images/pooloom-2.avif';
	import Pool from '$lib/images/Pool.avif';

	let images = [PoolRoom1, PoolRoom2, Pool];
</script>

<AccomodationImages {images} />
