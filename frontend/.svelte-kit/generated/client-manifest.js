export { matchers } from './client-matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7')
];

export const dictionary = {
	"": [[1], [0], 2],
	"login": [[1], [0], 4],
	"perfil": [[1], [0], 5],
	"question": [[1], [0], 6],
	"singup": [[1], [0], 7],
	"hunt/[huntId]/question": [[1], [0], 3]
};