<script lang="ts">
	import { page } from '$app/stores';
	import Conference from '../images/Conference1.jpg';
	import SwimmingPool from '$lib/images/SwimmingPool4.jpg';
	import office from '$lib/images/office-comp.jpeg';
	import poolTable from '$lib/images/PoolTable1.jpg';
	import gymaccess from '$lib/images/gym-comp.jpeg';
	import Tennis from '$lib/images/tennis-comp.jpeg';
	import Transport from '$lib/images/entry2.jpg';

	export let service = 'Service Title';
	export let description =
		'We offer various room standards, ranging from apartments, cottages and villas. Book a room based on your budget. ';

	export let long = '';

	const images: { [key: string]: any } = {
		conferencing: Conference,
		swimmingpool: SwimmingPool,
		officespace: office,
		tablegames: poolTable,
		gymaccess: gymaccess,
		tenniscourt: Tennis,
		transport: Transport
	};
	const sName: string = `${service.toLowerCase().replace(' ', '')}`;
</script>

{#if $page.url.pathname === '/services'}
	<div
		class=" bg-[#F6F6EF] shadow justify-items-start p-4 items-start min-h-[200px] w-full rounded-[8px]"
	>
		<div class="w-6/6 grid text-[#2D2E2E]">
			<div class="w-full col-span-1 grid grid-cols-1 gap-8">
				<img
					src={images[sName]}
					alt="A glimpse of service offered"
					class="w-full h-80 object-cover rounded"
				/>
				<div class="grid gap-2">
					<h1 class="font-[600] text-xl text-primary">{service}</h1>
					<p class="text-[#2D2E2E]">{long}</p>
				</div>
			</div>
		</div>
	</div>
{:else}
	<div
		class="container grid grid-cols-1 justify-items-start p-2 items-start min-h-[140px] w-full rounded-[8px]"
	>
		<div class="w-6/6 grid gap-1 text-[#2D2E2E]">
			<div class="grid grid-cols-3 gap-1 items-center">
				<div>
					<slot name="icon" />
				</div>
				<div class="col-span-2">
					<h1 class="font-[600] text-xl">{service}</h1>
					<p class="text-[#2D2E2E]">{description}</p>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.container {
		transition: all 0.3s ease;
		animation: fadeInCards 0.5s ease;
		animation-timeline: view();
		animation-range: -10% 90%;
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
