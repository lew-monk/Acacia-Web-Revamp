<script>
	import Face from '$lib/images/Group 239778.png';
</script>

<section class=" bg-[#F6F6EF] grid items-center py-24 gap-12">
	<div class="">
		<!-- <div class="w-full flex justify-center">
			<h2 class="text-xl text-primary relative oasis">Our Services</h2>
		</div> -->
		<div class="w-full h-full flex text-center justify-center items-center flex-col">
			<h1 class="text-5xl leading-snug w-full text-textPrimary font-medium">
				Testimonials <span class="text-primary wha"></span>
			</h1>
			<p class="text-center">
				Here is what some of our customers had to say about their stay at Acacia Village
			</p>
		</div>
	</div>
	<div class="w-full">
		<div class="grid gap-4 grid-cols-2 w-full">
			<div
				class="container grid grid-cols-1 justify-items-center items-center h-[320px] w-full border-[#CBD5E1] border rounded-[8px]"
			>
				<div class="w-6/6 grid gap-6 text-[#2D2E2E]">
					<div class="grid gap-4">
						<slot name="icon" />
						<h1 class="font-[600] text-3xl">“The place like no other in Juba.”</h1>
						<p class="text-[#2D2E2E]">
							“With only a short drive, Acacia Village is a heavenly escape from the chaos and noise
							of Juba. I have stayed a couple of times with friends and without doubt would
							recommend it."
						</p>
					</div>
					<div class="flex gap-4 items-center">
						<img src={Face} alt="" />
						<div>
							<h1 class="font-bold">Holly Suzzane</h1>
							<p>Guest</p>
						</div>
					</div>
				</div>
			</div>
			<div
				class="container grid grid-cols-1 justify-items-center items-center h-[320px] w-full border-[#CBD5E1] border rounded-[8px]"
			>
				<div class="w-6/6 grid gap-6 text-[#2D2E2E]">
					<div class="grid gap-4">
						<slot name="icon" />
						<h1 class="font-[600] text-3xl">“I choose Acacia Village anytime”</h1>
						<p class="text-[#2D2E2E]">
							“If you have to stay in Juba, then Acacia Village is the place to stay. I was lucky
							enough to have found it and it made my stay in Juba a great experience. ”
						</p>
					</div>
					<div class="flex gap-4 items-center">
						<img src={Face} alt="" />
						<div>
							<h1 class="font-bold">Steven G</h1>
							<p>Guest</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
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
	@keyframes fadeInIcon {
		0% {
			opacity: 0;
			transform: translateX(100%);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}
	.what {
		border-right: 6px solid #dde0c7;
		padding-right: 1rem;
		border-radius: 0.1rem;
		animation-timeline: view();
		animation: blink-caret 1s step-end infinite;
	}
	@keyframes blink-caret {
		from,
		to {
			border-color: transparent;
		}
		50% {
			border-color: #dde0c7;
		}
	}
</style>
