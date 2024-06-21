<script lang="ts">
	import * as Menubar from '$lib/components/ui/menubar';
	import Location from '$lib/images/Location-2.avif';
	import Gate from '$lib/images/FoodDrink1.jpg';
</script>

<Menubar.Root>
	<Menubar.Menu>
		<Menubar.Trigger class="shadow-none border-none"
			><p class="shadow-none text-base border-none">About</p>
		</Menubar.Trigger>
		<Menubar.Content class="shadow-none py-4 grid grid-cols-2 rounded w-1/2 z-10 h-[350px]">
			<Menubar.Item>
				<a href="about" class="bg-transpart h-[200px]">
					<img
						src={Location}
						width={800}
						height={400}
						class="rounded w-full h-full object-cover"
						alt="Acacia Entrance"
						loading="eager"
					/>
					<h1 class="">About Us</h1>
				</a>
			</Menubar.Item>
			<Menubar.Item>
				<a href="team" class="bg-transpart h-[200px]">
					<img
						src={Gate}
						class="rounded h-full w-full object-fill"
						alt="Acacia Entrance"
						loading="eager"
					/>
					<h1 class="">Our Team</h1>
				</a>
			</Menubar.Item>
			<!-- <Menubar.Item>
				<a href="https://marisafrica.com/">
					<img src={Location} height={200} width={200} class="rounded" alt="Acacia Entrance" />
					<h1 class="">Security</h1>
				</a>
			</Menubar.Item> -->
			<!-- <Menubar.Item>
				<a target="_blank" href="https://marisafrica.com/" class="h-[200px]">
					<img
						src={Maris}
						height={200}
						width={200}
						class="rounded h-full w-full object-contain"
						alt="Acacia Entrance"
						loading="eager"
					/>
					<h1 class="">The Maris Group</h1>
				</a>
			</Menubar.Item> -->
		</Menubar.Content>
	</Menubar.Menu>
</Menubar.Root>
