<script lang="ts">
	import neocitiesBadge from '$lib/assets/neocities-badge.svg';
</script>

<header
	class="flex items-center justify-between rounded-[5px] rounded-b-none border-b-2 border-lime-800 bg-lime-800 bg-gradient-to-b from-transparent to-white/20 p-2 inset-shadow-sm inset-shadow-white/20"
>
	<div>
		<h1 class="text-3xl font-medium text-white uppercase">Kirjahri's Website</h1>
		<h2 class="font-mono font-medium text-white/50">
			<a href="/" class="hover:text-white hover:underline">kirja.me</a>
		</h2>
	</div>
	<a href="https://neocities.org/site/kirjahri" target="_blank">
		<img src={neocitiesBadge} alt="Neocities badge" class="float-right" />
	</a>
</header>
