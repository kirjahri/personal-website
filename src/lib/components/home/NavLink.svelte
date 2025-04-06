<script lang="ts">
	let { href, content }: { href: string; content: string } = $props();
</script>

<li><a {href}>{content}</a></li>
