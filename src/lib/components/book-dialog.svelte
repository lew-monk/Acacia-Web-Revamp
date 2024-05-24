<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { DateFormatter, getLocalTimeZone, type DateValue } from '@internationalized/date';
	import DatePicker from './date-picker.svelte';
	import { enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { toast } from 'svelte-sonner';

	export let checkIn: DateValue | undefined = undefined;
	export let checkOut: DateValue | undefined = undefined;
	export let booking: string = '';
	export let email: string = '';
	export let adults: number = 2;
	export let children: number = 1;
	let loading = false;
	let error = false;

	const df = new DateFormatter('en-US', { dateStyle: 'long' });
</script>

<form
	action="your-stay"
	method="post"
	id="sendmail"
	use:enhance={({ formData }) => {
		loading = true;
		formData.set('checkIn', df.format(checkIn?.toDate(getLocalTimeZone())));
		formData.set('checkOut', df.format(checkOut?.toDate(getLocalTimeZone())));
		formData.set('adults', JSON.stringify(adults));
		formData.set('email', email);
		formData.set('children', JSON.stringify(children));
		return ({ update, result }) => {
			if (result.type === 'failure') {
				loading = false;
				error = true;
				toast.success('Event has been created', {
					description: 'Sunday, December 03, 2023 at 9:00 AM',
					action: {
						label: 'Undo',
						onClick: () => console.info('Undo')
					}
				});
			} else {
				console.log(result);
				update().finally(async () => {
					await invalidateAll();
					loading = false;
					toast.success(
						'Email has been sent and we will get back to you as soon as we this. Hold on tight',
						{
							description: new Date().toLocaleString(),
							action: {
								label: 'Unsend',
								onClick: () => console.info('Undo')
							}
						}
					);
				});
			}
		};
	}}
>
	<Dialog.Root>
		<Dialog.Trigger>
			<slot />
		</Dialog.Trigger>
		<Dialog.Content class="sm:max-w-screen-[456px] md:w-screen rounded">
			<Dialog.Header>
				<Dialog.Title>Your Stay Details</Dialog.Title>
				<Dialog.Description>
					Fill in the specificity of your stay below and we will be in touch
				</Dialog.Description>
			</Dialog.Header>
			<div class="grid gap-4 py-4">
				<div class="grid grid-cols-4 items-center gap-4">
					<Label for="name" class="text-right">Check In</Label>
					<div class="col-span-3">
						<DatePicker bind:dateValue={checkIn} />
					</div>
				</div>
				<div class="grid grid-cols-4 items-center gap-4">
					<Label for="name" class="text-right">Check Out</Label>
					<div class="col-span-3">
						<DatePicker bind:dateValue={checkOut} />
					</div>
				</div>
				<!-- <div class="grid grid-cols-4 items-center gap-4">
				<Label for="name" class="text-right">Room</Label>
				<div class="col-span-3">
					<Select bind:booking />
				</div>
			</div> -->
				<div class="grid grid-cols-4 items-center gap-4">
					<Label for="adults" class="text-right">Adults</Label>
					<Input
						id="name"
						name="adults"
						type="number"
						bind:value={adults}
						class="col-span-3 h-12 mr-2 rounded-lg"
					/>
				</div>
				<div class="grid grid-cols-4 items-center gap-4">
					<Label for="children" class="text-right">Children</Label>
					<Input
						id="name"
						name="children"
						type="number"
						value="1"
						class="col-span-3 h-12 mr-2 rounded-lg"
					/>
				</div>
				<div class="grid grid-cols-4 items-center gap-4">
					<Label for="email" class="text-right">Email</Label>
					<Input
						id="name"
						name="Email"
						type="email"
						required
						bind:value={email}
						class="col-span-3 h-12 mr-2 rounded-lg"
					/>
				</div>
			</div>
			<Dialog.Footer>
				{#if !loading}
					<input
						type="submit"
						class="bg-primary text-white px-6 py-2 rounded"
						form="sendmail"
						value="Submit"
					/>
				{:else}
					<svg
						aria-hidden="true"
						class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
						viewBox="0 0 100 101"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
							fill="currentColor"
						/>
						<path
							d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
							fill="currentFill"
						/>
					</svg>
				{/if}
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
</form>
