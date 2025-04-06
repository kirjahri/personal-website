<script lang="ts">
	import Header from '$lib/components/home/Header.svelte';
	import Navbar from '$lib/components/home/Navbar.svelte';
	import NavLink from '$lib/components/home/NavLink.svelte';
	import Footer from '$lib/components/home/Footer.svelte';
</script>

<svelte:head>
	<title>kirja.me</title>
</svelte:head>

<div class="flex h-screen items-center justify-center">
	<div class="m-2 grid h-180 w-7xl grid-rows-[auto_1fr] rounded-lg border bg-white">
		<Header />
		<div class="grid grid-cols-[auto_1fr] grid-rows-1 gap-2 p-2">
			<Navbar>
				<NavLink href="/" content="Home" />
			</Navbar>
			<main class="rounded-lg border p-2">Hello world!</main>
			<div class="col-span-full">
				<Footer />
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	@reference 'tailwindcss';

	:global(html) {
		@apply bg-gray-800;
	}
</style>
