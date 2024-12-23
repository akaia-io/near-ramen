import { type EnvConfig, FeatureId } from "$common/types";

export const envConfig: EnvConfig = {
	platformName: "Potlock",
	network: "mainnet" as const,

	contractMetadata: {
		version: "0.1.0",
		repoUrl: "https://github.com/PotLock/core",
	},

	indexer: {
		api: { endpointUrl: "https://dev.potlock.io" },
	},

	core: {
		donation: {
			contract: { accountId: "donate.staging.potlock.near" },
		},

		campaigns: {
			contract: { accountId: "campaigns.staging.potlock.near" },
		},

		lists: {
			contract: { accountId: "lists.staging.potlock.near" },
		},

		potFactory: {
			contract: { accountId: "potfactory.staging.potlock.near" },
		},

		sybil: {
			app: { url: "https://staging.nada.bot" },
			contract: { accountId: "v2new.staging.nadabot.near" },
		},

		voting: {
			// TODO: Figure out a way to store pot-associated voting contract instances on backend / chain
			//! Be careful when refactoring this
			contract: { accountId: "mpdao.vote.staging.potlock.near" },
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