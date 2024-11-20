<script>
	import Footer from '$lib/components/footer.svelte';
	import { Button } from '$lib/components/ui/button';
	import Call from '$lib/images/phone.png';
	import Location from '$lib/images/svg/location.svelte';
	import Sms from '$lib/images/svg/sms.svelte';
</script>

<section class="py-12">
	<div class="main text-white">
		<div class="w-full contact flex justify-center gap-4">
			<div class=" py-24 lg:w-1/2 px-12 lg:px-0 grid gap-4">
				<h1 class="text-5xl">Contact</h1>
				<div class="flex items-center gap-4">
					<img src={Call} alt="" height="64" width="64" class="h-full" />
					<div>
						<p class="font-light text-sm">+211 911 252 613</p>
					</div>
				</div>
				<div class="flex items-center gap-4">
					<Sms />
					<div>
						<p class="text-sm font-light">manager@acaciavillage.com</p>
					</div>
				</div>
				<div class="flex items-center gap-4">
					<Location />
					<div>
						<p class="text-sm font-light">
							Mundri Rd, Gudele II, Juba,<br /> South Sudan. 15 minute drive<br /> from Juba Airport
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="form w-full h-full flex items-center justify-center py-12 lg:py-0">
			<form action="" class="w-3/4">
				<div class="grid gap-4 grid-cols-2">
					<div class="flex flex-col gap-2">
						<label for="name">Name</label>
						<input type="text" id="name" class="" />
					</div>
					<div class="flex flex-col gap-2">
						<label for="email">Email</label>
						<input type="email" id="email" class="" />
					</div>
					<div class="flex flex-col gap-2">
						<label for="phone">Phone</label>
						<input type="tel" id="phone" class="" />
					</div>
					<div class="flex flex-col gap-2">
						<label for="message">Subject</label>
						<input
							name="message"
							id="message"
							class=" appearance-none bg-transparent border-b border-primary"
						/>
					</div>
					<div class="flex flex-col gap-2 col-span-2">
						<label for="message">Message</label>
						<textarea name="message" id="message" class="p-4"></textarea>
					</div>
					<div class="">
						<Button
							href="/contact"
							class="shadow-none bg-none border-2 border-primary rounded h-16 px-12"
							>Send message
						</Button>
					</div>
				</div>
			</form>
		</div>
	</div>
</section>
<Footer />

<style>
	section {
		display: grid;
		grid-column: start / end;
		grid-template-columns: subgrid;
	}
	.main {
		display: grid;
		grid-template-columns: 1fr 1fr;
		place-items: center;
		grid-column: start / end;
	}
	@media (max-width: 768px) {
		.main {
			grid-template-columns: 1fr;
		}
	}
	.contact {
		background-color: #717c26;
		color: white;
	}
	.form {
		background-color: #dde0c7;
		color: #2d2e2e;
	}
	input {
		background: transparent;
		border-bottom: 1px solid #717c26;
		border-radius: none;
		padding: 12px 0px;
		font-weight: 500;
		font-size: 12px;
	}
	input::placeholder {
		font-weight: 200;
		font-size: 12px;
		padding: 12px 0px;
		color: #2d2e2e;
	}
	input:focus,
	textarea:focus {
		outline: none;
	}
	textarea {
		background: transparent;
		border-bottom: 1px solid #717c26;
		border-radius: none;
		padding: 12px 0px;
	}
	textarea::placeholder {
		font-weight: 200;
		font-size: 12px;
		padding: 12px 0px;
		color: #2d2e2e;
	}
</style>
