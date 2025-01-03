import { type EnvConfig, FeatureId } from "$common/types";

export const envConfig: EnvConfig = {
	platformName: "Potlock",
	network: "mainnet" as const,

	contractMetadata: {
		version: "0.1.0",
		repoUrl: "https://github.com/PotLock/core",
	},

	indexer: {
		api: { endpointUrl: "https://api.potlock.io" },
	},

	core: {
		campaigns: {
			contract: { accountId: "campaigns.staging.potlock.near" },
		},

		donation: {
			contract: { accountId: "donate.potlock.near" },
		},

		lists: {
			contract: { accountId: "lists.potlock.near" },
		},

		potFactory: {
			contract: { accountId: "v1.potfactory.potlock.near" },
		},

		sybil: {
			app: { url: "https://app.nada.bot" },
			contract: { accountId: "v1.nadabot.near" },
		},

		voting: {
			// TODO: Figure out a way to store pot-associated voting contract instances on backend / chain
			//! Be careful when refactoring this
			contract: { accountId: "mpdao.vote.potlock.near" },
		},
	},

	social: {
		app: { url: "https://near.social" },
		contract: { accountId: "social.near" },
	},

	deFi: {
		metapool: {
			liquidStakingContract: {
				accountId: "meta-pool.near",
			},
		},

		refFinance: {
			exchangeContract: {
				accountId: "v2.ref-finance.near",
			},
		},
	},

	features: {
		[FeatureId.Voting]: {
			id: FeatureId.Voting,
			name: "Voting",
			isEnabled: true,
		},
	},
};
