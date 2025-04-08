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
	<div
		class="m-2 grid h-180 w-5xl grid-rows-[auto_1fr] rounded-lg border-2 border-lime-800 shadow-lg/25 backdrop-blur-[2px]"
	>
		<Header />
		<div class="grid grid-cols-[auto_1fr] grid-rows-1 gap-2 p-2">
			<Navbar>
				<NavLink href="/" content="Home" />
			</Navbar>
			<main class="rounded-lg border-2 border-lime-800 p-2 text-white">
				<section
					class="rounded-lg border-2 border-lime-800 bg-lime-800 bg-gradient-to-b from-transparent to-white/20 p-2 inset-shadow-sm inset-shadow-white/20"
				>
					<h1 class="text-2xl font-medium">Welcome!</h1>
					<hr class="my-2 text-white/50" />
					<p>
						If you <span class="text-xs">somehow</span> could not tell, this site is
						<strong>under construction!</strong> For now, enjoy this sample text:
					</p>
					<br />
					<p class="italic">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem delectus voluptates quia
						est, fugiat maiores totam quis incidunt alias laudantium sunt vel temporibus dolores
						impedit quisquam molestias molestiae ut harum?
					</p>
				</section>
			</main>
			<div class="col-span-full">
				<Footer />
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	@reference 'tailwindcss';

	:global(html) {
		@apply bg-lime-800;
	}
</style>
