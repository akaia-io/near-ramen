import type { PotFactory } from "./PotFactory.ts";

export type PaginatedPotFactoriesResponse = {
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
	results: PotFactory[];
};
