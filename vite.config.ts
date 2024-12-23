import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import extractorSvelte from "@unocss/extractor-svelte";
import UnoCSS from "unocss/vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
	plugins: [
		UnoCSS({
			extractors: [extractorSvelte()],
		}),
		sveltekit(),

		nodePolyfills({
			globals: { Buffer: true },
		}),
	],
});
