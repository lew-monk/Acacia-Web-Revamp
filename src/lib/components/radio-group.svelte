<script lang="ts">
	import * as RadioGroup from '$lib/components/ui/radio-group';
	import { Label } from '$lib/components/ui/label';
	let selected = 0;
</script>

<RadioGroup.Root value="luxury">
	<div
		class={selected === 0
			? 'flex items-start space-x-2 p-4 rounded-xl w-full border border-primary bg-[#F6F6EF]'
			: 'flex items-start space-x-2 p-4 rounded-xl w-full border border-primary'}
	>
		<RadioGroup.Item
			value="luxury"
			id="r1"
			on:click={() => {
				selected = 0;
			}}
		/>
		<Label for="r1" class="grid w-full gap-2">
			<div class="flex w-full justify-between">
				<h1 class="font-bold">Cottages</h1>
				<h1 class="font-bold">USD $90</h1>
			</div>
			<div>
				<ul class="list-disc opacity-40 grid gap-1">
					<li>Writing Desk</li>
					<li>Fridge</li>
					<li>Safe</li>
					<li>Air Conditioning</li>
				</ul>
			</div>
		</Label>
	</div>
	<div
		class={selected === 1
			? 'flex items-start space-x-2 p-4 rounded-xl w-full border border-primary bg-[#F6F6EF]'
			: 'flex items-start space-x-2 p-4 rounded-xl w-full border border-primary'}
	>
		<RadioGroup.Item
			value="Cottages"
			id="r2"
			on:click={() => {
				selected = 1;
			}}
		/>
		<Label for="r2" class="grid w-full gap-2">
			<div class="flex w-full justify-between">
				<h1 class="font-bold">Apartments</h1>
				<h1 class="font-bold">USD $100</h1>
			</div>
			<div>
				<ul class="list-disc opacity-40 grid gap-1">
					<li>Writing Desk</li>
					<li>Fridge</li>
					<li>Safe</li>
					<li>Air Conditioning</li>
				</ul>
			</div>
		</Label>
	</div>
	<div
		class={selected === 2
			? 'flex items-start space-x-2 p-4 rounded-xl w-full border border-primary bg-[#F6F6EF]'
			: 'flex items-start space-x-2 p-4 rounded-xl w-full border border-primary'}
	>
		<RadioGroup.Item
			value="Apartments"
			id="r3"
			on:click={() => {
				selected = 2;
			}}
		/>
		<Label for="r3" class="grid w-full gap-2">
			<div class="flex w-full justify-between">
				<h1 class="font-bold">Pool Rooms</h1>
				<h1 class="font-bold">USD $250</h1>
			</div>
			<div>
				<ul class="list-disc opacity-40 grid gap-1">
					<li>Writing Desk</li>
					<li>Fridge</li>
					<li>Safe</li>
				</ul>
			</div>
		</Label>
	</div>
	<RadioGroup.Input name="spacing" />
</RadioGroup.Root>
