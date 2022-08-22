export { matchers } from './client-matchers.js';

<<<<<<< HEAD
export const components = [
	() => import("..\\runtime\\components\\layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte")
];

export const dictionary = {
	"": [[0, 2], [1]]
=======
export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2')
];

export const dictionary = {
	"": [[1], [0], 2]
>>>>>>> bd622c6d27bd7454a7e46e432897c0e53fd6ce53
};