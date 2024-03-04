<script>
	import Food from '../images/Conference-Hall.avif';
</script>

<section class=" bg-[#DDE0C7] flex items-center" id="stay">
	<div class="py-24">
		<div class="w-full h-full flex justify-center items-center flex-col">
			<div class="w-5/6 flex gap-4 flex-col">
				<!-- <h2 class="text-xl text-primary relative oasis">About Section</h2> -->
				<h1 class="text-5xl leading-snug w-full text-textPrimary font-medium">
					Conference, Meetings and <span class="text-primary">Events</span>
				</h1>
				<p class="text-md text-[#2D2E2E] font-[500] leading-loose">
					We offer both indoor and outdoor event spaces and conference facilities tailored to your
					needs. Whether you're hosting a themed event or an executive meeting, Acacia Village
					ensures top-notch service that meets your satisfaction.
				</p>
			</div>
		</div>

		<img src={Food} class="w-4/4 rounded" alt="Acacia Drinks being served in glasses" />
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
		grid-template-columns: 1fr 1fr;
		place-items: center;
	}
	.oasis {
		position: relative;
		padding: 0em 1.5em;
		width: 16ch;
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
		right: 8px;
		background: #717c26;
	}
</style>
