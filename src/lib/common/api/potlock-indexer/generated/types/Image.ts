import type { Nft } from "./Nft.ts";

export type Image = {
	/**
	 * @type string | undefined, uri
	 */
	url?: string;
	/**
	 * @type string | undefined
	 */
	ipfs_cid?: string;
	/**
	 * @type object | undefined
	 */
	nft?: Nft;
};
