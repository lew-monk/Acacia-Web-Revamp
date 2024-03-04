<script lang="ts">
	import * as Menubar from '$lib/components/ui/menubar';
	import Location from '$lib/images/Location-2.avif';
</script>

<Menubar.Root>
	<Menubar.Menu>
		<Menubar.Trigger class="shadow-none border-none"
			><p class="shadow-none text-base border-none">Your Stay</p>
		</Menubar.Trigger>
		<Menubar.Content class="shadow-none py-4 grid grid-cols-3 rounded w-1/2 z-10 h-[40vh]">
			<Menubar.Item>
				<a href="book" class="bg-transpart">
					<img
						src={Location}
						width={800}
						height={400}
						class="rounded w-full h-full object-cover"
						alt="Acacia Entrance"
					/>
					<h1 class="">Accomodation</h1>
				</a>
			</Menubar.Item>
			<Menubar.Item>
				<a href="security" class="bg-transpart">
					<img
						src={Location}
						height={200}
						width={200}
						class="rounded h-full object-cover"
						alt="Acacia Entrance"
					/>
					<h1 class="">Security</h1>
				</a>
			</Menubar.Item>
			<Menubar.Item>
				<a href="services">
					<img src={Location} height={200} width={200} class="rounded" alt="Acacia Entrance" />
					<h1 class="">Our Services</h1>
				</a>
			</Menubar.Item>
		</Menubar.Content>
	</Menubar.Menu>
</Menubar.Root>
