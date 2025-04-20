<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="overflow-hidden">
	<div class="absolute size-full bg-radial from-white/15 to-transparent">
		<div
			class="size-full animate-[pan_90s_linear_infinite] bg-[url($lib/assets/circle-pattern.svg)] bg-size-[20px] opacity-15"
		></div>
	</div>
	{@render children?.()}
</div>
