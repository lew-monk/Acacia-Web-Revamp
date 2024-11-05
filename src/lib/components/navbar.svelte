<script>
	import { Button } from './ui/button';
	import Logo from '../images/AcaciaLogo.avif';
	import AboutMenuItem from './about-menu-item.svelte';
	import StayMenuItem from './stay-menu-item.svelte';
	import { slide } from 'svelte/transition';

	let open = false;
	let isExpanded = '';

	function clickHandler(action) {
		isExpanded = isExpanded === action ? '' : action;
	}
</script>

<nav class="px-5 w-full items-center shadow-sm z-100 lg:h-[80px] fixed top-0">
	<!-- <div class="sec-nav h-[40px] bg-primary w-full py-2 px-4 flex justify-end">
		contact us at: +211 911 252 613
	</div> -->
	<div class="nav-items py-2 h-[80px] max-h-full flex w-full justify-between items-center">
		<a href="/" class="lg:w-1/12 w-[100px]">
			<img src={Logo} alt="" class="lg:nav-img w-12/12 object-contain" />
		</a>
		<div class="flex-1 lg:flex hidden justify-center gap-12">
			<AboutMenuItem />
			<StayMenuItem />
			<a href="/services">Our Services</a>
			<a href="gallery">Gallery</a>
			<a href="contact">Contact</a>
		</div>

		<Button href="/your-stay" class="shadow-none hidden lg:block">Book Your Stay</Button>
		<div class="lg:hidden">
			<button
				class="text-gray-500 hover:text-gray-700 cursor-pointer mr-4 border-none focus:outline-none"
				class:open
				on:click={() => (open = !open)}
			>
				<svg width="32" height="24">
					<line id="top" x1="0" y1="2" x2="32" y2="2" />
					<line id="middle" x1="0" y1="12" x2="24" y2="12" />
					<line id="bottom" x1="0" y1="22" x2="32" y2="22" />
				</svg>
			</button>

			<aside
				class="absolute top-20 bg-white w-full flex gap-4 h-screen border-r-2 shadow-lg"
				class:open
			>
				<div class="p-12 h-full text-xl">
					<button class="mb-2 text-lg font-semibold block" on:click={() => clickHandler('about')}
						>About</button
					>
					{#if isExpanded === 'about'}
						<ul class="gap-2 grid text-base mb-4 ml-2" transition:slide>
							<a class="block" on:click={() => (open = !open)} href="about">About Us</a>
							<a class="block" on:click={() => (open = !open)} href="team">Our Team</a>
						</ul>
					{/if}
					<button class="mb-2 text-lg font-semibold block" on:click={() => clickHandler('stay')}
						>Your Stay</button
					>
					{#if isExpanded === 'stay'}
						<ul class="gap-2 grid text-base mb-4 ml-2" transition:slide>
							<a class="block" on:click={() => (open = !open)} href="your-stay">Accommodation</a>
							<a class="block" on:click={() => (open = !open)} href="security"
								>Safety and Security</a
							>
						</ul>
					{/if}
					<a
						class="block mb-2 text-lg font-semibold"
						on:click={() => (open = !open)}
						href="services">Our Services</a
					>
					<a class="block mb-2 text-lg font-semibold" on:click={() => (open = !open)} href="gallery"
						>Gallery</a
					>
					<a class="block mb-2 text-lg font-semibold" on:click={() => (open = !open)} href="contact"
						>Contact</a
					>
				</div>
			</aside>
		</div>
	</div>
</nav>

<style>
	nav {
		grid-column: start / end;
		grid-template-columns: subgrid;
		view-transition-name: fade;
		position: fixed;
		padding-left: 12px;
		z-index: 100;
		background: white;
		top: 0px;
	}
	.nav-items {
		grid-column: content / content-end;
		z-index: 10;
	}
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
	}

	.open {
		left: 0;
	}
	.sec-nav {
		grid-column: start / end;
		color: white;
	}
	@keyframes img-size {
		0% {
			transform: scale(0.9);
		}
		2% {
			transform: scale(1.2);
		}
	}
	@keyframes nav-size {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(1.1);
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		.nav-img {
			animation: img-size auto ease;
			animation-timeline: scroll(root);
		}
		.nav-items {
			animation: nav-siz auto ease;
			animation-timeline: scroll(root);
		}
	}
	svg {
		min-height: 16px;
		transition: transform 0.3s ease-in-out;
	}

	svg line {
		stroke: currentColor;
		stroke-width: 3;
		transition: transform 0.3s ease-in-out;
	}

	button {
		z-index: 20;
	}

	.open svg {
		transform: scale(0.7);
	}

	.open #top {
		transform: translate(6px, 0px) rotate(45deg);
	}

	.open #middle {
		opacity: 0;
	}

	.open #bottom {
		transform: translate(-12px, 9px) rotate(-45deg);
	}
</style>
