<script lang="ts">
	import * as Select from '$lib/components/ui/select';

	const fruits = [
		{ value: 'apple', label: 'Apple' },
		{ value: 'banana', label: 'Banana' },
		{ value: 'blueberry', label: 'Blueberry' },
		{ value: 'grapes', label: 'Grapes' },
		{ value: 'pineapple', label: 'Pineapple' }
	];
</script>

<Select.Root portal={null}>
	<Select.Trigger class="w-full h-12 shadow-none">
		<Select.Value class="font-semibold text-primary" placeholder="Occupancy" />
	</Select.Trigger>
	<Select.Content>
		<Select.Group>
			<Select.Label>Fruits</Select.Label>
			{#each fruits as fruit}
				<Select.Item value={fruit.value} label={fruit.label}>{fruit.label}</Select.Item>
			{/each}
		</Select.Group>
	</Select.Content>
	<Select.Input name="favoriteFruit" />
</Select.Root>
