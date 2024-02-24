<script>
	import Cottages from '../images/F.avif';
	import Banner from '../images/bannerImg.avif';
	import Food from '../images/Rectangle (1).avif';
	import Bed from '../images/bedroom.avif';
	import Lounge from '../images/Rectangle 20 (1).avif';
	import Lounger2 from '../images/Rectangle 20.avif';
	import { MoveLeft, MoveRight } from 'lucide-svelte';
	import { Button } from './ui/button';
</script>

<section id="gallery" class="py-24 bg-[#DDE0C7] flex items-center">
	<div class="grid gap-4">
		<h2 class="text-xl text-primary relative oasis">Our Gallery</h2>

		<div class="flex w-full items-center">
			<h1 class="text-5xl leading-snug w-full text-textPrimary font-medium">
				Moments at <span class="text-primary">Acacia</span>
			</h1>
			<div class="flex gap-4">
				<Button
					variant="outline"
					class="shadow-none h-16 w-16 rounded-full border-2 border-primary"
					size="icon"
				>
					<MoveLeft class="h-4 w-4" />
				</Button>
				<Button
					variant="outline"
					class="shadow-none h-16 w-16 rounded-full border-2 border-primary "
					size="icon"
				>
					<MoveRight class="h-4 w-4" />
				</Button>
			</div>
		</div>
		<div class="grid grid-cols-3 gap-4 w-full pt-8">
			<img src={Food} alt="" class="h-full object-cover rounded-[8px]" />
			<img src={Banner} alt="" class="h-full rounded-[8px]" />
			<div class="grid grid-cols-2 gap-4 grid-rows-2">
				<img src={Lounge} alt="" class="w-full object-cover h-full rounded-[8px]" />
				<img src={Cottages} alt="" class="w-full rounded-[8px]" />
				<img src={Bed} alt="" class="h-full object-cover rounded-[8px]" />
				<img src={Lounger2} alt="" class="h-full object-cover rounded-[8px]" />
			</div>
		</div>
	</div>
</section>

<style>
	section {
		display: grid;
		grid-column: start / end;
		grid-template-columns: subgrid;
	}
	section > div {
		display: grid;
		grid-column: content / content-end;
	}
	.oasis {
		position: relative;
		padding: 0em 1.5em;
		width: 14ch;
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
		right: 10px;
		background: #717c26;
	}
</style>
