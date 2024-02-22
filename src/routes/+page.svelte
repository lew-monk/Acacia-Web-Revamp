<script>
	import AboutSection from '$lib/components/about-section.svelte';
	import Banner from '$lib/components/banner.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Moments from '$lib/components/moments.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import Services from '$lib/components/services.svelte';
	import Socials from '$lib/components/socials.svelte';
</script>

<svelte:head>
	<title
		>Acacia Village. Welcome to one of Juba’s safest and most comfortable residential compounds.
	</title>
</svelte:head>
<Navbar />
<Banner />
<AboutSection />
<Moments />
<Services />
<Socials />
<Footer />
