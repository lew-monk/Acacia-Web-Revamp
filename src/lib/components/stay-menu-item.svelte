<script lang="ts">
	import * as Menubar from '$lib/components/ui/menubar';
	import Gate from '$lib/images/Gate.avif';
	import Pool from '$lib/images/Cottage2.jpg';
	import Esg from '$lib/images/Solar.jpg';
</script>

<Menubar.Root>
	<Menubar.Menu>
		<Menubar.Trigger class="shadow-none border-none"
			><p class="shadow-none text-base border-none">Your Stay</p>
		</Menubar.Trigger>
		<Menubar.Content class="shadow-none py-4 grid grid-cols-3 rounded w-1/2 z-10 h-[300px]">
			<Menubar.Item>
				<a href="your-stay" class="bg-transpart h-[200px]">
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
			<Menubar.Item>
				<a href="esg" class="h-[200px]">
					<img
						src={Esg}
						height={800}
						width={200}
						class="rounded object-fill h-full w-full"
						alt="Acacia Entrance"
						loading="eager"
					/>
					<h1 class="">ESG</h1>
				</a>
			</Menubar.Item>
		</Menubar.Content>
	</Menubar.Menu>
</Menubar.Root>
