<script lang="ts">
	import { Calendar as CalendarIcon } from 'lucide-svelte';
	import { type DateValue, DateFormatter, getLocalTimeZone } from '@internationalized/date';
	import { cn } from '$lib/utils';
	import { Button } from '$lib/components/ui/button';
	import { Calendar } from '$lib/components/ui/calendar';
	import * as Popover from '$lib/components/ui/popover';

	const df = new DateFormatter('en-US', {
		dateStyle: 'long'
	});

	export let dateValue: DateValue | undefined = undefined;
	export let title: string = 'Select a date';
</script>

<Popover.Root openFocus>
	<Popover.Trigger asChild let:builder>
		<Button
			variant="outline"
			class={cn(
				'w-full h-12 rounded shadow-none justify-between text-left font-semibold',
				!dateValue && 'text-muted-foreground'
			)}
			builders={[builder]}
		>
			{dateValue ? df.format(dateValue.toDate(getLocalTimeZone())) : title}
			<CalendarIcon class="mr-2 h-4 w-4" />
		</Button>
	</Popover.Trigger>
	<Popover.Content class="w-auto p-0">
		<Calendar bind:value={dateValue} initialFocus />
	</Popover.Content>
</Popover.Root>
