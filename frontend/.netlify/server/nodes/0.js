import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/fallbacks/layout.svelte.js')).default;
export const file = '_app/immutable/components/layout.svelte-0cfacd34.js';
export { server };
export const imports = ["_app/immutable/components/layout.svelte-0cfacd34.js","_app/immutable/chunks/index-1a00f4d0.js"];
export const stylesheets = [];
