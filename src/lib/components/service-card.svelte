<script>
	export let service = 'Service Title';
	export let description =
		'We offer various room standards, ranging from apartments, cottages and villas. Book a room based on your budget. ';
</script>

<div
	class="grid grid-cols-1 justify-items-center items-center h-[320px] w-full border-primary border-[3px] rounded-[8px]"
>
	<div class="w-5/6 grid gap-4 min-h-[75%] text-[#2D2E2E]">
		<div class="grid gap-4">
			<slot name="icon" />
			<h1 class="font-[600] text-3xl">{service}</h1>
			<p class="text-[#2D2E2E]">{description}</p>
		</div>
		<!-- <a class="flex" href="/"
			>View More <span>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M14.4243 12.4239C14.6325 12.2156 14.6557 11.8923 14.4937 11.6585L14.4242 11.5754L10.4242 7.5757C10.1899 7.34139 9.81 7.3414 9.5757 7.57573C9.36742 7.78402 9.34429 8.10733 9.5063 8.34116L9.57573 8.42426L13.152 12L9.5757 15.5757C9.36742 15.784 9.34429 16.1073 9.5063 16.3412L9.57573 16.4243C9.78402 16.6325 10.1073 16.6557 10.3412 16.4937L10.4243 16.4242L14.4243 12.4239Z"
						fill="#270302"
					/>
				</svg>
			</span>
		</a> -->
	</div>
</div>
