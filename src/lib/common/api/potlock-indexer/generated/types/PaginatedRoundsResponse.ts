import type { Round } from "./Round.ts";

export type PaginatedRoundsResponse = {
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
	results: Round[];
};
