<script lang="ts">
	import "@unocss/reset/tailwind-compat.css";
	import "uno.css";
	import "../app.css";
	import { ModeWatcher } from "mode-watcher";
	import { Button } from "$common/ui/components";
	import { LoginButton } from "$lib/common/services/auth";

	let { children, data: _ } = $props();
</script>

<ModeWatcher />

<nav
	flex="~ row"
	w="full"
	items="start"
	justify="between"
	bg="black"
	text="foreground"
	p="6"
	gap="4"
>
	<Button borderless href="/">🏠 Home</Button>

	<div flex="~ wrap" gap="4">
		<LoginButton />
	</div>
</nav>

<main flex="~ col" w="full" class="min-h-screen">
	{@render children()}
</main>
