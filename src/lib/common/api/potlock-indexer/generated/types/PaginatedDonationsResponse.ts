import type { Donation } from "./Donation.ts";

export type PaginatedDonationsResponse = {
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
	results: Donation[];
};
