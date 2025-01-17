import { type Network } from "@wpdas/naxios";

import { NETWORK } from "$common/_config";

export const evmWalletChains = {
	mainnet: {
		chainId: 397,
		name: "Near Mainnet",
		explorer: "https://eth-explorer.near.org",
		rpc: "https://eth-rpc.mainnet.near.org",
	},

	testnet: {
		chainId: 398,
		name: "Near Testnet",
		explorer: "https://eth-explorer-testnet.near.org",
		rpc: "https://eth-rpc.testnet.near.org",
	},

	localnet: {
		chainId: 398,
		name: "Near Testnet",
		explorer: "https://eth-explorer-testnet.near.org",
		rpc: "https://eth-rpc.testnet.near.org",
	},
};

export const EVMWalletChain = evmWalletChains[NETWORK as Network];
