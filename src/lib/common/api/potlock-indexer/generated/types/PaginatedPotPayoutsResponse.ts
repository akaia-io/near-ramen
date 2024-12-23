import type { PotPayout } from "./PotPayout.ts";

export type PaginatedPotPayoutsResponse = {
	/**
	 * @type integer
	 */
	count: number;
	/**
	 * @type string
	 */
	next: string | null;
	/**
	 * @type string
	 */
	previous: string | null;
	/**
	 * @type array
	 */
	results: PotPayout[];
};
