<script>
	import Cottages from '../images/F.avif';
	import { Button } from './ui/button';
</script>

<section class="py-24 bg-bgDark flex items-center">
	<div class="grid gap-4">
		<h2 class="text-xl text-primary relative oasis">Our Gallery</h2>

		<h1 class="text-5xl leading-snug w-full text-textPrimary font-medium">
			Moments at <span class="text-primary">Acacia</span>
		</h1>
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
