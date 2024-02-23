<script>
	import Banner from '../images/bannerImg.avif';
	import Food from '../images/Rectangle (1).avif';
	import Bed from '../images/bedroom.avif';
	import Lounge from '../images/Rectangle 20 (1).avif';
</script>

<section class=" bg-[#DDE0C7] grid items-center py-12 gap-12">
	<div class="w-full">
		<div class="w-full flex">
			<h2 class="text-xl text-left text-primary relative oasis">Accomadation</h2>
		</div>
		<div class="w-full flex justify-center items-center flex-col">
			<h1 class="text-5xl leading-snug w-full text-textPrimary font-medium">
				Book a <span class="text-primary">Room</span>
			</h1>
		</div>
		<div class="w-full grid grid-cols-3 gap-4">
			<div class="grid w-full col-span-2 grid-rows-2 gap-2">
				<div>
					<img src={Bed} alt="" class="w-full rounded" />
				</div>
				<!-- <div class="grid grid-cols-4 gap-4">
					<img src={Bed} alt="" class="w-full rounded object-cover h-32" />
					<img src={Food} alt="" class="w-full rounded object-cover h-32" />
					<img src={Banner} alt="" class="w-full rounded object-cover h-32" />
					<img src={Lounge} alt="" class="w-full rounded object-cover h-32" />
				</div> -->
			</div>
			<div></div>
		</div>
	</div>
	<div class="w-full"></div>
</section>

<style>
	section {
		display: grid;
		grid-column: start / end;
		grid-template-columns: subgrid;
		place-items: center;
	}
	section > div {
		display: grid;
		grid-column: content / content-end;
		place-items: center;
		gap: 1em;
	}
	.oasis {
		position: relative;
		padding: 0em 1.5em;
		width: 15ch;
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
		right: 16px;
		background: #717c26;
	}
</style>
