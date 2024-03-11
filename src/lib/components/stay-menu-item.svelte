<script lang="ts">
	import * as Menubar from '$lib/components/ui/menubar';
	import Location from '$lib/images/Bar-3.avif';
	import Gate from '$lib/images/Gate.avif';
	import Pool from '$lib/images/Pool.avif';
</script>

<Menubar.Root>
	<Menubar.Menu>
		<Menubar.Trigger class="shadow-none border-none"
			><p class="shadow-none text-base border-none">Your Stay</p>
		</Menubar.Trigger>
		<Menubar.Content class="shadow-none py-4 grid grid-cols-2 rounded w-1/2 z-10 h-[300px]">
			<Menubar.Item>
				<a href="book" class="bg-transpart h-[200px]">
					<img
						src={Pool}
						width={800}
						height={400}
						class="rounded w-full h-full object-cover"
						alt="Acacia Entrance"
						loading="eager"
					/>
					<h1 class="">Accommodation</h1>
				</a>
			</Menubar.Item>
			<Menubar.Item>
				<a href="security" class="bg-transpart h-[200px]">
					<img
						src={Gate}
						height={800}
						width={400}
						class="rounded h-full object-cover"
						alt="Acacia Entrance"
						loading="eager"
					/>
					<h1 class="">Safety and Security</h1>
				</a>
			</Menubar.Item>
			<!-- <Menubar.Item>
				<a href="services" class="h-[200px]">
					<img
						src={Location}
						height={800}
						width={200}
						class="rounded h-full w-full"
						alt="Acacia Entrance"
						loading="eager"
					/>
					<h1 class="">Our Services</h1>
				</a>
			</Menubar.Item> -->
		</Menubar.Content>
	</Menubar.Menu>
</Menubar.Root>
