<script lang="ts">
	import * as Select from '$lib/components/ui/select';

	const fruits = [
		{ value: 'luxury', label: 'Luxury' },
		{ value: 'cottages', label: 'Cottages' },
		{ value: 'conferencing', label: 'Conferencing' }
	];
</script>

<Select.Root portal={null}>
	<Select.Trigger class="w-full h-12 shadow-none z-10">
		<Select.Value class="font-semibold text-primary" placeholder="Occupancy" />
	</Select.Trigger>
	<Select.Content>
		<Select.Group>
			<Select.Label>Categories</Select.Label>
			{#each fruits as fruit}
				<Select.Item value={fruit.value} label={fruit.label}>{fruit.label}</Select.Item>
			{/each}
		</Select.Group>
	</Select.Content>
	<Select.Input name="favoriteFruit" />
</Select.Root>
