import { defineConfig } from "@kubb/core";
import { pluginOas } from "@kubb/plugin-oas";
import { pluginTs } from "@kubb/plugin-ts";
import { pluginClient } from "@kubb/plugin-client";

export default defineConfig({
	root: ".",

	input: {
		path: "https://test-dev.potlock.io/api/schema",
	},

	output: {
		path: "./src/lib/common/api/potlock-indexer/generated",
	},

	plugins: [
		pluginOas(),
		pluginTs(),
		pluginClient({
			pathParamsType: "object",
			dataReturnType: "full",
			operations: true,
			parser: "client",
			client: "axios",

			output: {
				path: "./clients/axios",
				barrelType: "all",
				banner: "/* eslint-disable no-alert, no-console */",
				footer: "",
			},

			// group: {
			// 	type: "tag",
			// 	name: ({ group }) => `${group}Service`,
			// },

			// transformers: {
			// 	name: (name, type) => {
			// 		return `${name}Client`;
			// 	},
			// },

			// exclude: [
			// 	{
			// 		type: "tag",
			// 		pattern: "store",
			// 	},
			// ],
		}),
	],
});
