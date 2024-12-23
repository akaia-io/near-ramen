import type { Pot } from "./Pot.ts";

export type PaginatedPotsResponse = {
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
	results: Pot[];
};
