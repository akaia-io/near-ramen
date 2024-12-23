import { preprocessMeltUI, sequence } from "@melt-ui/pp";
import adapterAuto from "@sveltejs/adapter-auto";
//import adapterStatic from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config}*/
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: sequence([vitePreprocess(), preprocessMeltUI()]),

	kit: {
		adapter: adapterAuto(),

		env: {
			publicPrefix: "PUBLIC_",
		},

		alias: {
			$lib: "./src/lib",
			"$lib/*": "./src/lib/*",
			$common: "./src/lib/common",
			"$common/*": "./src/lib/common/*",
		},
	},

	vitePlugin: {
		inspector: {
			showToggleButton: "active",
		},
	},
};

export default config;
