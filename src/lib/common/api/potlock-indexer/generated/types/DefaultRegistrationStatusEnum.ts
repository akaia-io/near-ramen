export const defaultRegistrationStatusEnumEnum = {
	Pending: "Pending",
	Approved: "Approved",
	Rejected: "Rejected",
	Graylisted: "Graylisted",
	Blacklisted: "Blacklisted",
} as const;

export type DefaultRegistrationStatusEnumEnum =
	(typeof defaultRegistrationStatusEnumEnum)[keyof typeof defaultRegistrationStatusEnumEnum];

/**
 * @description * `Pending` - Pending\n* `Approved` - Approved\n* `Rejected` - Rejected\n* `Graylisted` - Graylisted\n* `Blacklisted` - Blacklisted
 */
export type DefaultRegistrationStatusEnum = DefaultRegistrationStatusEnumEnum;
