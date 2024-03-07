<script>
	import AccomodationImages from './accomodation-images.svelte';
	import Bed from '$lib/images/bedroom.avif';
	import Cottage from '$lib/images/F.avif';
	import Towel from '$lib/images/0B2A9474.avif';

	let images = [Bed, Cottage, Towel];
</script>

<AccomodationImages {images} />
