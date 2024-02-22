<script>
	import Cottages from '../images/F.avif';
	import Banner from '../images/bannerImg.avif';
	import Food from '../images/Rectangle (1).avif';
	import Bed from '../images/bedroom.avif';
	import Lounge from '../images/Rectangle 20 (1).avif';
	import Lounger2 from '../images/Rectangle 20.avif';
	import { Button } from './ui/button';
</script>

<section class="py-24 bg-[#DDE0C7] flex items-center">
	<div class="grid gap-4">
		<h2 class="text-xl text-primary relative oasis">Our Socials</h2>

		<div class="flex w-full items-center">
			<h1 class="text-5xl leading-snug w-full text-textPrimary font-medium">
				Follow us on <span class="text-primary">Instagram</span>
			</h1>
			<div class="flex gap-4">
				<Button href="/login" class="shadow-none items-center bg-none rounded h-12 px-12">
					<div class="flex items-center h-8 gap-4">
						<span>Follow Us</span>
					</div>
				</Button>
			</div>
		</div>
		<div class="grid grid-cols-3 gap-4 w-full pt-8">
			<img src={Food} alt="" class="h-full object-cover rounded-[8px]" />
			<img src={Banner} alt="" class="h-full rounded-[8px]" />
			<div class="grid grid-cols-2 gap-4 grid-rows-2">
				<img src={Lounge} alt="" class="w-full object-cover h-full rounded-[8px]" loading="lazy" />
				<img src={Cottages} alt="" class="w-full rounded-[8px]" loading="lazy" />
				<img src={Bed} alt="" class="h-full object-cover rounded-[8px]" loading="lazy" />
				<img src={Lounger2} alt="" class="h-full object-cover rounded-[8px]" loading="lazy" />
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
