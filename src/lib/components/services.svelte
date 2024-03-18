<script>
	import Accomodation from '$lib/images/svg/accomodation.svelte';
	import Catering from '$lib/images/svg/catering.svelte';
	import Conference from '$lib/images/svg/conference.svelte';
	import Connectivity from '$lib/images/svg/connectivity.svelte';
	import Energy from '$lib/images/svg/energy.svelte';
	import Gym from '$lib/images/svg/gym.svelte';
	import Laundry from '$lib/images/svg/laundry.svelte';
	import Office from '$lib/images/svg/office.svelte';
	import Swimming from '$lib/images/svg/swimming.svelte';
	import TableGames from '$lib/images/svg/table-games.svelte';
	import Transport from '$lib/images/svg/transport.svelte';
	import ServiceCard from './service-card.svelte';
	import Button from './ui/button/button.svelte';
	import { page } from '$app/stores';

	let data = [
		{
			service: 'Accommodation',
			description:
				'We offer various room standards, ranging from apartments, cottages and villas. Book a room based on your budget. ',
			Icon: Accomodation
		},
		{
			service: 'Transport',
			description: 'Assistance with all local transport, security and immigration requirements.',
			Icon: Transport
		},
		{
			service: 'Catering',
			description: 'World class catering for our multi-cultural guests',
			Icon: Catering
		},
		{
			service: 'Laundry Services',
			description: 'Collected, washed and pressed for you, six days a week',
			Icon: Laundry
		},
		{
			service: 'Connectivity',
			description: 'High speed, uncapped internet activity ensuring you are always connected',
			Icon: Connectivity
		},
		{
			service: 'Conferencing',
			description: 'Flexible conferencing and workshop and can host up to 40 people.',
			Icon: Conference
		},
		{
			service: 'Swimming Pool',
			long: 'The pool is perfect for swimming and relaxation. After your swim, stay refreshed by the poolside as you stretch on the sun lounger with a drink at hand',
			description: 'Cool off in our private outdoor swimming pool',
			Icon: Swimming
		},
		{
			service: 'Office Space',
			long: 'Let us tailor and handle all of your office needs in our fully furnished and air-conditions office units adjacent to our conference rooms and restaurant.',
			description:
				'It’s business as usual at Acacia village. Our team can create an office to suit your needs',
			Icon: Office
		},
		{
			service: 'Table Games',
			long: 'Where strategic minds come together for thrilling moments of skill, luck, and friendly competition.',
			description:
				'Enjoy a game of pool, table tennis or table football, whilst watching the sport in our games area by the bar.',
			Icon: TableGames
		},
		{
			service: 'Gym Access',
			description: 'Rejuvenate and recharging in our private gym.',
			long: 'While at Acacia village, there is no need to let your fitness regime slip. We offer a fully equipped gym area, including running and rowing machines, as well as various weights machines.',
			Icon: Gym
		},
		{
			service: 'Tennis Court',
			description: 'Hit a tennis ball on Juba’s only full size tennis court',
			long: 'The best maintained tennis court in Juba, available to residents and to our Tennis Members. Call Reception to join!',
			Icon: TableGames
		},
		{
			service: 'Renewable Energy',
			long: '',
			description:
				'Experience sustainability and comfort at our hotel, powered by renewable energy.',
			Icon: Energy
		}
	];

	let dataSeg = data.slice(0, data.length - 1);

	$: if ($page.url.pathname === '/services') {
		dataSeg = [...data.slice(5, data.length - 1)];
	}
</script>

<section class=" bg-[#DDE0C7] grid items-center py-12 gap-8">
	<div class="">
		<!-- <div class="w-full flex justify-center">
			<h2 class="text-xl text-primary relative oasis">Our Services</h2>
		</div> -->
		<div class="w-full h-full flex justify-center items-center flex-col">
			<h1 class="text-5xl leading-snug w-full text-textPrimary font-medium">
				What we <span class="text-primary">Offer</span>
			</h1>
		</div>
	</div>
	<div class="w-full">
		<div class="grid gap-6 lg:grid-cols-3 grid-cols-1 w-full">
			{#each dataSeg as { service, description, long, Icon }}
				<ServiceCard {service} {description} {long}>
					<Icon slot="icon" />
				</ServiceCard>
			{/each}
		</div>

		{#if $page.url.pathname === '/'}
			<Button href="services" class="shadow-none items-center bg-none rounded h-16 px-12 ">
				<div class="flex items-center h-8 gap-4">
					<span class="exp-text">Explore Our Ammenities</span>
				</div>
			</Button>
		{/if}
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

	.exp-text {
		animation: fadeInText 1s ease;
		animation-timeline: view(70% 1%);
	}
	@keyframes fadeInText {
		0% {
			opacity: 0;
			transform: translateY(100px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
	.exp-icon {
		animation: fadeInIcon 1s ease;
		animation-timeline: view(60% 2%);
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
</style>
