<script lang="ts">
	import * as Menubar from '$lib/components/ui/menubar';
	import Location from '$lib/images/Location-2.avif';
</script>

<Menubar.Root>
	<Menubar.Menu>
		<Menubar.Trigger class="shadow-none border-none"
			><p class="shadow-none text-base border-none">About</p>
		</Menubar.Trigger>
		<Menubar.Content class="shadow-none py-4 flex rounded w-1/2 h-[20vh]">
			<Menubar.Item>
				<a href="contact" class="bg-transpart">
					<img
						src={Location}
						height={200}
						width={200}
						class="rounded h-full object-cover"
						alt="Acacia Entrance"
					/>
					<h1 class="">Our Team</h1>
				</a>
			</Menubar.Item>
			<Menubar.Item>
				<div>
					<img src={Location} height={200} width={200} class="rounded" alt="Acacia Entrance" />
					<h1 class="">Security</h1>
				</div>
			</Menubar.Item>
		</Menubar.Content>
	</Menubar.Menu>
</Menubar.Root>
