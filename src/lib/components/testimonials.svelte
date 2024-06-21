<script>
	import * as Carousel from '$lib/components/ui/carousel';
</script>

<section class=" bg-[#F6F6EF] grid items-center lg:py-24 py-12 gap-12">
	<div class="">
		<!-- <div class="w-full flex justify-center">
			<h2 class="text-xl text-primary relative oasis">Our Services</h2>
		</div> -->
		<div class="w-full h-full flex text-center justify-center items-center flex-col">
			<h1 class="lg:text-5xl text-2xl leading-snug w-full text-textPrimary font-medium">
				What our clients have to say
				<span class="text-primary wha"></span>
			</h1>
		</div>
	</div>
	<div class="w-full mx-2">
		<Carousel.Root
			opts={{
				align: 'start'
			}}
			class="w-full "
		>
			<Carousel.Content class="flex lg:px-12 px-4 gap-4">
				<Carousel.Item
					class="container  lg:basis-1/2 basis-full grid grid-cols-1 justify-items-center items-center lg:h-[320px]  border-[#CBD5E1] border rounded-[8px]"
				>
					<div class="w-6/6 grid gap-6 text-[#2D2E2E]">
						<div class="grid gap-4">
							<slot name="icon" />
							<h1 class="font-[600] text-xl lg:text-3xl">“The place like no other in Juba.”</h1>
							<p class="text-[#2D2E2E]">
								“With only a short drive, Acacia Village is a heavenly escape from the chaos and
								noise of Juba. I have stayed a couple of times with friends and without doubt would
								recommend it."
							</p>
						</div>
						<div class="flex gap-4 items-center">
							<!-- <img src={Face} alt="" /> -->
							<div>
								<h1 class="font-bold">Holly S</h1>
							</div>
						</div>
					</div>
				</Carousel.Item>
				<Carousel.Item
					class="container  lg:basis-1/2 basis-full grid grid-cols-1 justify-items-center items-center lg:h-[320px]  border-[#CBD5E1] border rounded-[8px]"
				>
					<div class="w-6/6 grid gap-6 text-[#2D2E2E]">
						<div class="grid gap-4">
							<slot name="icon" />
							<h1 class="font-[600] text-xl lg:text-3xl">“I choose Acacia Village anytime”</h1>
							<p class="text-[#2D2E2E]">
								“If you have to stay in Juba, then Acacia Village is the place to stay. I was lucky
								enough to have found it and it made my stay in Juba a great experience. ”
							</p>
						</div>
						<div class="flex gap-4 items-center">
							<!-- 						<img src={Face} alt="" /> -->
							<div>
								<h1 class="font-bold">Steven G</h1>
							</div>
						</div>
					</div>
				</Carousel.Item>
				<Carousel.Item
					class="container  lg:basis-1/2 basis-full grid grid-cols-1 justify-items-center items-center lg:h-[320px]  border-[#CBD5E1] border rounded-[8px]"
				>
					<div class="w-6/6 py-4 grid gap-6 text-[#2D2E2E]">
						<div class="grid gap-4">
							<slot name="icon" />
							<h1 class="font-[600] text-lg lg:text-3xl">“Undoubtedly the best place in Juba”</h1>
							<p class="text-[#2D2E2E]">
								Acacia is undoubtedly the best place to stay and live in Juba, with the flavour of a
								holiday resort where guests can enjoy the transparent waters of the pool, the shade
								of the trees and the quietness of the outdoors
							</p>
						</div>
						<div class="flex gap-4 items-center">
							<!-- 						<img src={Face} alt="" /> -->
							<div>
								<h1 class="font-bold">French Ambassador to South Sudan</h1>
							</div>
						</div>
					</div>
				</Carousel.Item>
				<Carousel.Item
					class="container  lg:basis-1/2 basis-full grid grid-cols-1 justify-items-center items-center lg:h-[320px]  border-[#CBD5E1] border rounded-[8px]"
				>
					<div class="w-6/6 grid gap-6 text-[#2D2E2E]">
						<div class="grid gap-4">
							<slot name="icon" />
							<h1 class="font-[600] text-lg lg:text-3xl">“Acacia can be your home”</h1>
							<p class="text-[#2D2E2E]">
								“I lived at Acacia for four years. It is an oasis of calm, peace, friendly service
								and comfortable accommodation in a turbulent city. It is protected by VSS, the only
								armed security company in South Sudan. We have a special relationship with Acacia
								Village and ensure it is the best protected lodge in Juba.”
							</p>
						</div>
						<div class="flex gap-4 items-center">
							<!-- 						<img src={Face} alt="" /> -->
							<div>
								<h1 class="font-bold">Simon F</h1>
							</div>
						</div>
					</div>
				</Carousel.Item>
			</Carousel.Content>
			<Carousel.Previous />
			<Carousel.Next />
		</Carousel.Root>
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
