import type { List } from "./List.ts";

export type PaginatedListsResponse = {
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
	results: List[];
};
