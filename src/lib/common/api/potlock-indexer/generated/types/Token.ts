export type Token = {
	/**
	 * @description Token ID (address).
	 * @type string
	 */
	account: string;
	/**
	 * @description Token name.
	 * @type string
	 */
	name?: string | null;
	/**
	 * @description Token symbol.
	 * @type string
	 */
	symbol?: string | null;
	/**
	 * @description Token icon (base64 data URL).
	 * @type string
	 */
	icon?: string | null;
	/**
	 * @description Token decimals.
	 * @type integer
	 */
	decimals: number;
	/**
	 * @description Token id on coingecko.
	 * @type string
	 */
	coingecko_id?: string | null;
};
