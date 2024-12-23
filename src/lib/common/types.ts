/**
 *! Heads up! Types defined here can ONLY use external dependencies!
 */

import type { Network } from "@wpdas/naxios";
import type { Account } from "near-api-js";

export type { infer as FromSchema } from "zod";

export type FeatureFlags = { isEnabled: boolean };

export enum FeatureId {
	Voting = "Voting",
}

export type Feature = FeatureFlags & {
	id: FeatureId;
	name: string;
};

export type FeatureRegistry = Record<FeatureId, Feature>;

export type AccountId = Account["accountId"];

export interface ByAccountId {
	accountId: AccountId;
}

export type ContractConfig = ByAccountId & {};

export type EnvConfig = {
	platformName: string;
	network: Network;
	contractMetadata: { version: string; repoUrl: string };
	indexer: { api: { endpointUrl: string } };

	core: {
		campaigns: { contract: { accountId: string } };
		donation: { contract: ContractConfig };
		lists: { contract: ContractConfig };
		potFactory: { contract: ContractConfig };
		sybil: { app: { url: string }; contract: ContractConfig };
		voting: { contract: ContractConfig };
	};

	social: { app: { url: string }; contract: ContractConfig };

	deFi: {
		metapool: {
			liquidStakingContract: ContractConfig;
		};

		refFinance: {
			exchangeContract: ContractConfig;
		};
	};

	features: FeatureRegistry;
};

export type UnionFromStringList<ListOfMembers extends string[]> = ListOfMembers[number];

export type U128String = string;

export interface ByStringId {
	id: string;
}

/**
 * Either "near" or FT contract account id.
 */
export type TokenId = "near" | AccountId;

export interface ByTokenId {
	/**
	 * Either "near" or FT contract account id.
	 */
	tokenId: TokenId;
}

export type ListId = number;

export interface ByListId {
	listId: ListId;
}

export type CampaignId = number;

export interface ByCampaignId {
	campaignId: CampaignId;
}

/**
 * `"{CONTRACT_ADDRESS}:{METHOD_NAME}"`
 */
export type ProviderId = string;

export interface ByRegistrationId {
	registrationId: number;
}
