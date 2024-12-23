<script lang="ts">
	import { PLATFORM_NAME } from "$lib/common/_config";
	import type { PageData } from "./$types";

	const { data }: { data: PageData } = $props();
</script>

<div flex="~ col" items="center" gap="8">
	<header
		flex="~ row"
		w="full"
		items="start"
		justify="center"
		bg="black"
		text="white"
		p="6"
		gap="4"
	>
		<div flex="~ col" gap="4" items="center">
			<h1 text="3xl" font="bold">{PLATFORM_NAME}</h1>
		</div>
	</header>

	<section flex="~ col" w="full" gap="4" class="max-w-6xl">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium labore accusamus ullam
			culpa tempora voluptas minima. Incidunt voluptatum ullam, ipsum sit unde quas accusantium
			autem in hic deserunt, maxime soluta.
		</p>
	</section>
</div>
