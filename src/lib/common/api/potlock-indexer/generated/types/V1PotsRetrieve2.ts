import type { Pot } from "./Pot.ts";

export type V1PotsRetrieve2PathParams = {
	/**
	 * @type string
	 */
	pot_id: string;
};

/**
 * @description Returns pot details
 */
export type V1PotsRetrieve2200 = Pot;

/**
 * @description Pot not found
 */
export type V1PotsRetrieve2404 = any;

export type V1PotsRetrieve2QueryResponse = V1PotsRetrieve2200;

export type V1PotsRetrieve2Query = {
	Response: V1PotsRetrieve2200;
	PathParams: V1PotsRetrieve2PathParams;
	Errors: V1PotsRetrieve2404;
};
