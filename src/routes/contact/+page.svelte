<script>
	import Footer from '$lib/components/footer.svelte';
	import { Button } from '$lib/components/ui/button';
	import Call from '$lib/images/svg/call.svelte';
	import Location from '$lib/images/svg/location.svelte';
	import Sms from '$lib/images/svg/sms.svelte';
</script>

<section class="">
	<div class="main text-white">
		<div class="w-full contact flex justify-center">
			<div class=" py-24 w-1/2 grid gap-4">
				<h1 class="text-5xl">Contact Us</h1>
				<p>Kindly fill in the form to contact us. A callback will be made to the number provide</p>
				<div class="flex items-center gap-4">
					<Call />
					<div>
						<p class="font-semibold">Give us a call</p>
						<p class="font-light text-sm">+249000000000</p>
					</div>
				</div>
				<div class="flex items-center gap-4">
					<Sms />
					<div>
						<p class="font-semibold">Send us a message</p>
						<p class="text-sm font-light">manager@acaciavillage.com</p>
					</div>
				</div>
				<div class="flex items-center gap-4">
					<Location />
					<div>
						<p class="font-semibold">Location</p>
						<p class="text-sm font-light">
							Mundri Rd, Gudele II, Juba,<br /> South Sudan. 15 minute drive<br /> from Juba Airport
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="form w-full h-full flex items-center justify-center">
			<form action="" class="w-3/4">
				<div class="grid gap-4 grid-cols-2">
					<div class="flex flex-col gap-2">
						<label for="name">Name</label>
						<input type="text" id="name" class="" placeholder="Enter Your Name" />
					</div>
					<div class="flex flex-col gap-2">
						<label for="email">Email</label>
						<input type="email" id="email" class="" placeholder="Enter Your Email" />
					</div>
					<div class="flex flex-col gap-2">
						<label for="phone">Phone</label>
						<input type="tel" id="phone" class="" placeholder="Enter Your Phone Number" />
					</div>
					<div class="flex flex-col gap-2">
						<label for="message">Subject</label>
						<input
							name="message"
							id="message"
							class=" appearance-none bg-transparent border-b border-primary"
							placeholder="How can we help ?"
						/>
					</div>
					<div class="flex flex-col gap-2 col-span-2">
						<label for="message">Message</label>
						<textarea
							placeholder="Enter Your Message"
							name="message"
							id="message"
							class="p-4 rounded-lg"
						></textarea>
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
