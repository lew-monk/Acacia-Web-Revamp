<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import BannerImg from '../images/bannerImg.avif';
	import BannerImg1 from '../images/Bar-2.avif';
	import Autoplay from 'embla-carousel-autoplay';

	export let images = [BannerImg1, BannerImg];
	export let jump = true;
</script>

<Carousel.Root
	plugins={[
		Autoplay({
			delay: 4000,
			jump: jump,
			duration: 500
		})
	]}
	opts={{ loop: true, slidesToScroll: 'auto' }}
	class="w-full  h-full m-0"
>
	<Carousel.Content class="h-[60vh] lg:h-[80vh] w-full p-0">
		{#each images as image, i (i)}
			<Carousel.Item class="h-full w-full p-0">
				<div class="h-full w-full p-0">
					<Card.Root class="w-full h-full p-0">
						<img
							src={image}
							class="object-cover w-full h-full"
							alt="Acacia Drinks being served in glasses"
							loading="eager"
						/>
					</Card.Root>
				</div>
			</Carousel.Item>
		{/each}
	</Carousel.Content>
</Carousel.Root>

<style>
	.hide {
		outline: 0;
		cursor: pointer;
		background-color: transparent;
		touch-action: manipulation;
		position: absolute;
		z-index: 1;
		top: 50%;
		transform: translateY(-50%);
		border: 0;
		width: 30px;
		height: 30px;
		justify-content: center;
		align-items: center;
		fill: #1bcacd;
		padding: 0;
	}
</style>
