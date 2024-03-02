<script>
	import { Button } from './ui/button';
	import Logo from '../images/AcaciaLogo.avif';
	import AboutMenuItem from './about-menu-item.svelte';
</script>

<nav class=" w-full items-center shadow-sm relative z-100 h-[80px]">
	<!-- <div class="sec-nav h-[40px] bg-primary w-full py-2 px-4 flex justify-end">
		contact us at: +211 911 252 613
	</div> -->
	<div class="nav-items py-2 h-[80px] max-h-full flex w-full justify-between items-center">
		<a href="/" class="w-1/12">
			<img src={Logo} alt="" class="nav-img w-12/12 object-contain" />
		</a>
		<div class="flex-1 flex justify-center gap-12">
			<AboutMenuItem />
			<a href="/#stay">Your Stay</a>
			<a href="/#gallery">Gallery</a>
			<a href="/services">Our Services</a>
			<a href="contact">Contact Us</a>
		</div>

		<Button href="/book" class="shadow-none">Book Your Stay</Button>
	</div>
</nav>

<style>
	nav {
		grid-column: start / end;
		display: grid;
		grid-template-columns: subgrid;
		view-transition-name: fade;
		position: sticky;
		z-index: 100;
		background: white;
		top: 0;
	}
	.nav-items {
		grid-column: content / content-end;
		z-index: 10;
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
			animation: nav-size auto ease;
			animation-timeline: scroll(root);
		}
	}
</style>
