<script>
	import { Button } from './ui/button';
	import Logo from '../images/AcaciaLogo.avif';
</script>

<nav class=" h-[90px] w-full items-center">
	<div class="nav-items h-full max-h-full flex w-full justify-between items-center">
		<img src={Logo} alt="" class=" w-1/12 object-contain" />
		<div class="flex-1 flex justify-center gap-12">
			<a href="#about">About</a>
			<a href="#stay">Your Stay</a>
			<a href="#about">Gallery</a>
			<a href="#about">Our Services</a>
			<a href="#about">Contact Us</a>
		</div>

		<Button href="/login" label="Login" class="shadow-none">Book Your Stay</Button>
	</div>
</nav>

<style>
	nav {
		grid-column: start / end;
		display: grid;
		grid-template-columns: subgrid;
	}
	.nav-items {
		grid-column: content / content-end;
	}
</style>
