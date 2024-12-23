import { env } from "$env/dynamic/public";
import { NEAR_NOMINATION_EXP } from "near-api-js/lib/utils/format";

export const DEBUG = Boolean(env.PUBLIC_DEBUG);

export const NATIVE_TOKEN_ID = "near";
export const NATIVE_TOKEN_DECIMALS = NEAR_NOMINATION_EXP;
export const FULL_TGAS = "300000000000000";
