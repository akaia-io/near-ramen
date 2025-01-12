/**
 *! Heads up! Types defined here can ONLY use external dependencies!
 */

import type { Account } from "near-api-js";

export type { infer as FromSchema } from "zod";

export type SupportedNetwork = "mainnet" | "testnet";

export type AccountId = Account["accountId"];

export interface ByAccountId {
	accountId: AccountId;
}

export type ContractConfig = ByAccountId & {};

export type EnvConfig = {
	platformName: string;
	network: SupportedNetwork;

	contracts: {
		socialDb: ContractConfig;
	};
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

/**
 * `"{CONTRACT_ADDRESS}:{METHOD_NAME}"`
 */
export type ProviderId = string;
