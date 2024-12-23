export type ListUpvote = {
	/**
	 * @description Upvote id.
	 * @type integer
	 */
	readonly id: number;
	/**
	 * @description Upvote creation date.
	 * @type string, date-time
	 */
	created_at: string;
	/**
	 * @description List upvoted.
	 * @type integer
	 */
	list: number;
	/**
	 * @description Account that upvoted the list.
	 * @type string
	 */
	account: string;
};
