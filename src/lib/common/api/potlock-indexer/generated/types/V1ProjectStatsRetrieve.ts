export type V1ProjectStatsRetrievePathParams = {
	/**
	 * @type string
	 */
	account_id: string;
};

export type V1ProjectStatsRetrieveQueryParams = {
	/**
	 * @description Page number for pagination
	 * @type integer | undefined
	 */
	page?: number;
	/**
	 * @description Number of results per page
	 * @type integer | undefined
	 */
	page_size?: number;
};

/**
 * @description Returns project statistics data
 */
export type V1ProjectStatsRetrieve200 = any;

/**
 * @description Internal server error
 */
export type V1ProjectStatsRetrieve500 = any;

export type V1ProjectStatsRetrieveQueryResponse = V1ProjectStatsRetrieve200;

export type V1ProjectStatsRetrieveQuery = {
	Response: V1ProjectStatsRetrieve200;
	PathParams: V1ProjectStatsRetrievePathParams;
	QueryParams: V1ProjectStatsRetrieveQueryParams;
	Errors: V1ProjectStatsRetrieve500;
};
