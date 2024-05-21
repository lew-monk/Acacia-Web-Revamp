<script lang="ts">
	import * as Select from '$lib/components/ui/select';

	const fruits = [
		{ value: 'apartments', label: 'Single Apartment' },
		{ value: 'cottages', label: 'Cottage' },
		{ value: 'conferencing', label: 'Conferencing' }
	];
	export let booking: string = '';
</script>

<Select.Root portal={null} onSelectedChange={(e) => (booking = e?.value)}>
	<Select.Trigger class="w-full h-12 shadow-none z-10">
		<Select.Value
			class="font-semibold placeholder:text-muted-foreground"
			placeholder={fruits[0].label}
		/>
	</Select.Trigger>
	<Select.Content>
		<Select.Group>
			{#each fruits as fruit}
				<Select.Item value={fruit.value} label={fruit.label}>{fruit.label}</Select.Item>
			{/each}
		</Select.Group>
	</Select.Content>
	<Select.Input name="favoriteFruit" />
</Select.Root>
