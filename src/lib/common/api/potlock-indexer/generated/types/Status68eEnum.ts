export const status68eEnumEnum = {
	Pending: "Pending",
	Approved: "Approved",
	Rejected: "Rejected",
	InReview: "InReview",
	Blacklisted: "Blacklisted",
} as const;

export type Status68eEnumEnum = (typeof status68eEnumEnum)[keyof typeof status68eEnumEnum];

/**
 * @description * `Pending` - Pending\n* `Approved` - Approved\n* `Rejected` - Rejected\n* `InReview` - InReview\n* `Blacklisted` - Blacklisted
 */
export type Status68eEnum = Status68eEnumEnum;
