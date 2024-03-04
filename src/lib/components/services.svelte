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
	import Tennis from '$lib/images/svg/tennis.svelte';
	import Transport from '$lib/images/svg/transport.svelte';
	import ServiceCard from './service-card.svelte';
	import Button from './ui/button/button.svelte';

	let data = [
		{
			service: 'Accomodation',
			description:
				'We offer various room standards, ranging from apartments, cottages and villas. Book a room based on your budget. ',
			Icon: Accomodation
		},
		{
			service: 'Office Space',
			description:
				'It’s business as usual at Acacia village. Our team can create an office to suit your needs',
			Icon: Office
		},
		{
			service: 'Transport',
			description: 'Assistance with all local transport, security and immigration requirements.',
			Icon: Transport
		},
		{
			service: 'Catering',
			description:
				'We offer various room standards, ranging from apartments, cottages and villas. Book a room based on your budget. ',
			Icon: Catering
		},
		{
			service: 'Laundry Services',
			description: 'Collected, washed and pressed for you, six days a week',
			Icon: Laundry
		},
		{
			service: 'Tennis Court',
			description: 'Hit a tennis ball on Juba’s only full size tennis court',
			Icon: TableGames
		},
		{
			service: 'Conferencing',
			description: 'Flexible conferencing and workshop. Facilities for up to 40 people.',
			Icon: Conference
		},
		{
			service: 'Swimming Pool',
			description: 'Cool off in our private outdoor swimming pool',
			Icon: Swimming
		},
		{
			service: 'Connectivity',
			description: 'High speed, uncapped internet activity ensuring you are always connected',
			Icon: Connectivity
		},
		{
			service: 'Table Games',
			description:
				'Enjoy a game of pool, table tennis or table football, whilst watching the sport in our games area by the bar.',
			Icon: TableGames
		},
		{
			service: 'Gym Access',
			description: 'Rejuvenate and recharging in our private gym.',
			Icon: Gym
		},
		{
			service: 'Renewable Energy',
			description:
				'Experience sustainability and comfort at our hotel, powered by renewable energy.',
			Icon: Energy
		}
	];
</script>

<section class=" bg-[#DDE0C7] grid items-center py-24 gap-12">
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
		<div class="grid gap-4 grid-cols-3 w-full">
			{#each data as { service, description, Icon }}
				<ServiceCard {service} {description}>
					<Icon slot="icon" />
				</ServiceCard>
			{/each}
		</div>

		<Button href="/login" class="shadow-none items-center bg-none rounded h-16 px-12 mt-12">
			<div class="flex items-center h-8 gap-4">
				<span class="exp-text">Explore Our Ammenities</span>
				<span class="exp-icon">
					<svg
						width="25"
						height="24"
						viewBox="0 0 25 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M20.1446 13.1063L20.071 13.1915L16.495 16.922C16.1129 17.3207 15.4798 17.334 15.0811 16.9519C14.7131 16.5991 14.6734 16.0326 14.9701 15.6339L15.0512 15.538L17.0061 13.4991L4.34914 13.4995C3.8363 13.4995 3.41364 13.1134 3.35587 12.6161L3.34914 12.4995C3.34914 11.9866 3.73518 11.564 4.23252 11.5062L4.34914 11.4995L17.0071 11.4991L15.0512 9.46007C14.6691 9.06137 14.6824 8.42835 15.0811 8.04617C15.4492 7.69339 16.0169 7.67766 16.4026 7.99091L16.495 8.07607L20.1049 11.8426L20.1746 11.9338L20.2246 12.0149L20.2713 12.1113L20.3148 12.2379C20.3819 12.4811 20.3594 12.751 20.2226 12.9898L20.1446 13.1063Z"
							fill="white"
						/>
					</svg>
				</span>
			</div>
		</Button>
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
