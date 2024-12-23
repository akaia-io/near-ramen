import type { Account } from "./Account.ts";
import type { ProjectInPair } from "./ProjectInPair.ts";

export type Vote = {
	/**
	 * @type object
	 */
	voter: Account;
	/**
	 * @type integer
	 */
	pair_id: number;
	/**
	 * @type object
	 */
	winner: ProjectInPair;
	/**
	 * @type string
	 */
	readonly pair: string;
	/**
	 * @type string, date-time
	 */
	voted_date: string;
};
