<script>
	import Cottages from '../images/Bar1.jpg';
	import Banner from '../images/Cottage4.jpg';
	import SwimmingPool from '../images/SwimmingPool5.jpg';
	import Kitchen from '../images/Kitchen4.jpg';
	import Food from '../images/Food2.jpg';
	import Bar2 from '../images/Bar2.jpg';
	import Food3 from '../images/Food3.jpg';
	import Games from '../images/Games1.jpg';
	import Gym from '../images/gyme2.jpg';
	import Bed from '../images/Cottage1.jpg';
	import Lounge from '../images/Restaurant1.jpg';
	import Lounger2 from '../images/Food4.jpg';
</script>

<section id="gallery" class="py-24 bg-[#DDE0C7] flex items-center">
	<div class="grid gap-4">
		<!-- <h2 class="text-xl text-primary relative oasis">Our Gallery</h2> -->

		<div class="flex w-full items-center">
			<h1 class="text-5xl leading-snug w-full text-textPrimary font-medium">
				Moments at <span class="text-primary">Acacia</span>
			</h1>
			<!-- <div class="flex gap-4">
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
			</div> -->
		</div>
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full pt-8">
			<img src={SwimmingPool} alt="" class="h- object-contain rounded-[8px] w-full" />
			<img src={Banner} alt="" class="object-cover rounded-[8px]" />
			<div class="grid grid-cols-2 gap-4 grid-rows-2">
				<img src={Lounge} alt="" class="w-full object-contain rounded-[8px]" />
				<img src={Cottages} alt="" class="w-full rounded-[8px]" />
				<img src={Bed} alt="" class="object-contain rounded-[8px]" />
				<img src={Lounger2} alt="" class="object-contain rounded-[8px]" />
			</div>
		</div>
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full pt-8">
			<div class="grid grid-cols-2 gap-4 grid-rows-2">
				<img src={Food3} alt="" class="w-full object-contain rounded-[8px]" />
				<img src={Games} alt="" class="w-full rounded-[8px]" />
				<img src={Gym} alt="" class=" object-contain rounded-[8px]" />
				<img src={Bar2} alt="" class=" object-contain rounded-[8px]" />
			</div>
			<img src={Kitchen} alt="" class=" object-contain rounded-[8px]" />
			<img src={Food} alt="" class="object-contain rounded-[8px]" />
		</div>
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full pt-8">
			<img src="/ariel-court.jpg" alt="" class=" object-contain rounded-[8px]" />
			<img src="/player-court.jpg" alt="" class=" object-contain h-full rounded-[8px]" />
			<img src="/court-empty.jpg" alt="" class="object-cover h-full rounded-[8px]" />
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
