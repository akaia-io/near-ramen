import type { List } from "./List.ts";

export type V1ListsRetrieve2PathParams = {
	/**
	 * @type integer
	 */
	list_id: number;
};

/**
 * @description Returns list details
 */
export type V1ListsRetrieve2200 = List;

/**
 * @description List not found
 */
export type V1ListsRetrieve2404 = any;

/**
 * @description Internal server error
 */
export type V1ListsRetrieve2500 = any;

export type V1ListsRetrieve2QueryResponse = V1ListsRetrieve2200;

export type V1ListsRetrieve2Query = {
	Response: V1ListsRetrieve2200;
	PathParams: V1ListsRetrieve2PathParams;
	Errors: V1ListsRetrieve2404 | V1ListsRetrieve2500;
};
