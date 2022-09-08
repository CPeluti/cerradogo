import type * as Kit from '@sveltejs/kit';

interface RouteParams extends Partial<Record<string, string>> { huntId: string }

export type Errors = undefined;
export type PageData = Record<never, never>;
export type PageServerData = null;