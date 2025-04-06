<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<aside class="rounded-lg border p-2">
	<nav>
		<ul>
			{@render children?.()}
		</ul>
	</nav>
</aside>
