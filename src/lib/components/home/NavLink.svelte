<script lang="ts">
	interface Props {
		href: string;
		content: string;
	}

	let { href, content }: Props = $props();
</script>

<li>
	<a
		class="block w-50 rounded-lg p-2 text-white/50 hover:text-white hover:underline hover:inset-ring-2 hover:inset-ring-white"
		{href}>{content}</a
	>
</li>
