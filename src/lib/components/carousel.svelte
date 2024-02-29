<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import { onMount } from 'svelte';
	import BannerImg from '../images/bannerImg.avif';
	import BannerImg1 from '../images/Bar-2.avif';
	import BannerImg3 from '../images/Bar.avif';
	import BannerImg2 from '../images/bedroom.avif';
	import BannerImg4 from '../images/Bar-3.avif';
	import Autoplay from 'embla-carousel-autoplay';

	const images = [BannerImg, BannerImg1, BannerImg2, BannerImg3, BannerImg4];
</script>

<Carousel.Root
	plugins={[
		Autoplay({
			delay: 4000,
			jump: true
		})
	]}
	opts={{ loop: true, slidesToScroll: 'auto' }}
	class="w-full h-full"
>
	<Carousel.Content class="h-[80vh] ">
		{#each images as image, i (i)}
			<Carousel.Item class="h-full ">
				<div class="h-full">
					<Card.Root class="h-full">
						<img
							src={image}
							class="object-cover h-full"
							alt="Acacia Drinks being served in glasses"
							loading="lazy"
						/>
					</Card.Root>
				</div>
			</Carousel.Item>
		{/each}
	</Carousel.Content>
	<Carousel.Previous />
	<Carousel.Next />
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
