<script lang="ts">
	interface Props {
		href: string;
		content: string;
	}

	let { href, content }: Props = $props();
</script>

<li><a class="block w-50 rounded-lg border p-2" {href}>{content}</a></li>
