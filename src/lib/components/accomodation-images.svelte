<script>
	import Banner from '../images/bannerImg.avif';
	import Food from '../images/Rectangle (1).avif';
	import Bed from '../images/bedroom.avif';
	import Lounge from '../images/Rectangle 20 (1).avif';

	export let images = [Banner, Food, Bed, Lounge];
	let selectedImage = images[0];
</script>

<div class="flex flex-col w-full grid-rows-2 gap-2">
	<div>
		<img src={selectedImage} alt="" class="w-full rounded h-[60vh] object-cover" />
	</div>
	<div class="grid grid-cols-4 gap-4">
		{#each images as image}
			<img src={image} alt="" class="w-full rounded object-cover h-32" />
		{/each}
	</div>
</div>
