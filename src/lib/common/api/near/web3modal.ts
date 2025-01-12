import { injected, walletConnect } from "@wagmi/connectors";
import { createConfig, http, reconnect } from "@wagmi/core";
import { createWeb3Modal } from "@web3modal/wagmi";

import { NETWORK } from "$common/_config";
import { EVMWalletChain } from "$lib/common/_config/evm";
import { WALLETCONNECT_PROJECT_ID } from "$lib/common/constants";

// Config
const near = {
	id: EVMWalletChain.chainId,
	name: EVMWalletChain.name,
	nativeCurrency: {
		decimals: 18,
		name: "NEAR",
		symbol: "NEAR",
	},
	rpcUrls: {
		default: { http: [EVMWalletChain.rpc] },
		public: { http: [EVMWalletChain.rpc] },
	},
	blockExplorers: {
		default: {
			name: "NEAR Explorer",
			url: EVMWalletChain.explorer,
		},
	},
	testnet: NETWORK === "testnet",
};

export const wagmiConfig = createConfig({
	chains: [near],
	transports: { [near.id]: http() },

	connectors: [
		walletConnect({ projectId: WALLETCONNECT_PROJECT_ID, showQrModal: false }),
		injected({ shimDisconnect: true }),
	],
});

// Preserve login state on page reload
reconnect(wagmiConfig);

// Modal for login
export const web3Modal = createWeb3Modal({
	wagmiConfig,
	projectId: WALLETCONNECT_PROJECT_ID,
});
