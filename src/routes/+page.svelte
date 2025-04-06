<script lang="ts">
	import Header from '$lib/components/home/Header.svelte';
	import Navbar from '$lib/components/home/Navbar.svelte';
	import Footer from '$lib/components/home/Footer.svelte';
</script>

<svelte:head>
	<title>kirja.me</title>
</svelte:head>

<div class="flex h-screen items-center justify-center">
	<div class="grid h-180 w-7xl grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto]">
		<div class="col-span-full">
			<Header />
		</div>
		<Navbar />
		<main class="outline">Hello world!</main>
		<div class="col-span-full">
			<Footer />
		</div>
	</div>
</div>
