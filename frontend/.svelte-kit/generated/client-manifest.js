export { matchers } from './client-matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7')];

export const server_loads = [];

export const dictionary = {
	"": [2],
	"login": [5],
	"perfil": [6],
	"signup": [7],
	"hunt/[huntId]": [3],
	"hunt/[huntId]/question": [4]
};