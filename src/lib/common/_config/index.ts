import { getEnvConfig } from "./env";

export const {
	platformName: PLATFORM_NAME,
	envTag: ENV_TAG,
	network: NETWORK,

	contracts: { socialDb: SOCIAL_DB_CONTRACT_ENV_CONFIG },
} = getEnvConfig();

export const BLOCKCHAIN_EXPLORER_TX_ENDPOINT_URL =
	NETWORK === "mainnet" ? "https://nearblocks.io/txns" : "https://testnet.nearblocks.io/txns";
