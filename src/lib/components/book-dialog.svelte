<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import type { DateValue } from '@internationalized/date';
	import DatePicker from './date-picker.svelte';
	import Select from './select.svelte';

	export let checkIn: DateValue | undefined = undefined;
	export let checkOut: DateValue | undefined = undefined;
	export let booking: string = '';
</script>

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
				<Label for="name" class="text-right">Adults</Label>
				<Input id="name" type="number" value="2" class="col-span-3 h-12 mr-2 rounded-lg" />
			</div>
			<div class="grid grid-cols-4 items-center gap-4">
				<Label for="name" class="text-right">Children</Label>
				<Input id="name" type="number" value="1" class="col-span-3 h-12 mr-2 rounded-lg" />
			</div>
		</div>
		<Dialog.Footer>
			<Button type="submit">Book Now</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
