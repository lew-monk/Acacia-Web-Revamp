<script>
	export let service = 'Service Title';
	export let description =
		'We offer various room standards, ranging from apartments, cottages and villas. Book a room based on your budget. ';
</script>

<div
	class="container grid grid-cols-1 justify-items-start p-4 items-start min-h-[220px] w-full rounded-[8px]"
>
	<div class="w-6/6 grid gap-1 min-h-[7 text-[#2D2E2E]">
		<div class="grid grid-cols-4 gap-2">
			<div>
				<slot name="icon" />
			</div>
			<div class="col-span-3">
				<h1 class="font-[600] text-3xl">{service}</h1>
				<p class="text-[#2D2E2E]">{description}</p>
			</div>
		</div>
	</div>
</div>

<style>
	.container {
		transition: all 0.3s ease;
		animation: fadeInCards 0.5s ease;
		animation-timeline: view();
		animation-range: -30%;
		animation-fill-mode: forwards;
		animation-delay: calc(var(--animation-delay) * 100ms);
	}
	.container:hover {
		transform: translateY(-5px);
	}
	@keyframes fadeInCards {
		0% {
			opacity: 0;
			scale: 0.8;
		}
		100% {
			opacity: 1;
			scale: 1;
		}
	}
</style>
