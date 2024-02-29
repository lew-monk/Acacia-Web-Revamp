<script>
	import Cottages from '../images/F.avif';
	import { Button } from './ui/button';
</script>

<section class=" bg-[#F6F6EF] flex items-center" id="stay">
	<div class="py-24">
		<img src={Cottages} class="w-4/4" alt="Acacia Drinks being served in glasses" />
		<div class="w-full h-full flex justify-center items-center flex-col">
			<div class="w-5/6 flex gap-4 flex-col">
				<!-- <h2 class="text-xl text-primary relative oasis">About Section</h2> -->
				<h1 class="text-5xl leading-snug w-full text-textPrimary font-medium">
					Your Stay at <span class="text-primary">Acacia</span> Village
				</h1>
				<p class="text-md text-[#2D2E2E] font-[500] leading-loose">
					Our range of air-conditioned Single Apartments, Poolside Studios, and Cottages boast a
					double bed, satellite TV, Workstation and an ensuite bathroom. We provide clean, modern,
					cozy and functional accommodation all managed by our friendly staff. Whether you are on a
					long-term work rotation or a romantic weekend getaway, you can be sure of a relaxing stay.
				</p>
				<p class="text-md font-[500] text-[#2D2E2E] leading-loose">
					Acacia Village is guarded 24/7 by VSS, South Sudan’s largest private security company and
					us surrounded by a 2.2m perimeter wall topped with razor wire, an electric fence,
					perimeter lighting, lined with anti-vehicle-ram protection
				</p>
				<div>
					<Button
						href="/book"
						label="Contact Us"
						class="shadow-none items-center bg-none rounded h-16 px-12"
					>
						<div class="flex items-center h-8 gap-4">
							<span>Explore Your Options</span>
							<span>
								<svg
									width="25"
									height="24"
									viewBox="0 0 25 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M20.1446 13.1063L20.071 13.1915L16.495 16.922C16.1129 17.3207 15.4798 17.334 15.0811 16.9519C14.7131 16.5991 14.6734 16.0326 14.9701 15.6339L15.0512 15.538L17.0061 13.4991L4.34914 13.4995C3.8363 13.4995 3.41364 13.1134 3.35587 12.6161L3.34914 12.4995C3.34914 11.9866 3.73518 11.564 4.23252 11.5062L4.34914 11.4995L17.0071 11.4991L15.0512 9.46007C14.6691 9.06137 14.6824 8.42835 15.0811 8.04617C15.4492 7.69339 16.0169 7.67766 16.4026 7.99091L16.495 8.07607L20.1049 11.8426L20.1746 11.9338L20.2246 12.0149L20.2713 12.1113L20.3148 12.2379C20.3819 12.4811 20.3594 12.751 20.2226 12.9898L20.1446 13.1063Z"
										fill="white"
									/>
								</svg>
							</span>
						</div>
					</Button>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		display: grid;
		grid-column: start / end;
		grid-template-columns: subgrid;
	}
	section > div {
		display: grid;
		grid-column: content / content-end;
		grid-template-columns: 0.8fr 1fr;
		place-items: center;
	}
	.oasis {
		position: relative;
		padding: 0em 1.5em;
		width: 16ch;
	}
	.oasis::before {
		content: ' ';
		display: block;
		height: 2px;
		width: 22px;
		position: absolute;
		top: 50%;
		left: 0px;
		background: #717c26;
	}
	.oasis::after {
		content: ' ';
		display: block;
		height: 2px;
		width: 22px;
		position: absolute;
		top: 50%;
		right: 8px;
		background: #717c26;
	}
</style>
