<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="pointer-events-none absolute -z-10 size-full bg-radial from-white/20 to-transparent">
	<div
		class="size-full animate-[pan_120s_linear_infinite] bg-[url($lib/assets/circle-pattern.svg)] bg-size-[20px] opacity-10"
	></div>
</div>
{@render children?.()}
