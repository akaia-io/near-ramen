import { type EnvConfig } from "$common/types";

export const envConfig: EnvConfig = {
	platformName: "Potlock",
	network: "testnet" as const,

	contracts: {
		socialDb: {
			accountId: "v1.social08.testnet",
		},
	},
};
