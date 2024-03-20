<script lang="ts">
	export let tabs: { title: string; content: string }[] = [];
	export let handleTabClick: (tab: { title: string; content: string }) => void;
	let selectedTab = tabs[0];
</script>

<aside class="border-b border-primary h-16 my-4">
	<ul class="px-4 flex w-full h-full gap-4">
		{#each tabs as tab}
			<li class="w-[200px] h-full">
				<button
					class="h-full text-sm w-full justify-center flex items-center border-b-4 border-transparent text-center"
					class:selectedTab={selectedTab === tab}
					on:click={() => {
						handleTabClick(tab);
						selectedTab = tab;
					}}
					>{tab.title}
				</button>
			</li>
		{/each}
	</ul>
</aside>

<style>
	aside {
		grid-column: content / content-end;
	}
	.selectedTab {
		transition: all 0.3s ease-in-out;
		border-bottom: 2px solid hsl(var(--primary));
	}
</style>
