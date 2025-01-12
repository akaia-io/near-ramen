import { type EnvConfig } from "$common/types";

export const envConfig: EnvConfig = {
	platformName: "Ramen",
	network: "mainnet" as const,

	contracts: {
		socialDb: {
			accountId: "social.near",
		},
	},
};
