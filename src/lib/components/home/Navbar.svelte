<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<aside
	class="rounded-lg border-2 border-lime-800 bg-lime-800 bg-gradient-to-b from-transparent to-white/20 p-2 inset-shadow-sm inset-shadow-white/20"
>
	<nav>
		<ul>
			{@render children?.()}
		</ul>
	</nav>
</aside>
