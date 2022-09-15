export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","fonts.css","images/Group_3.png","images/cacada_1.png","images/coletar.png","images/dica.png","images/google_maps.jpg","images/menu.png","images/perfil.png","images/podio.png"]),
	mimeTypes: {".png":"image/png",".css":"text/css",".jpg":"image/jpeg"},
	_: {
		entry: {"file":"_app/immutable/start-e8be4189.js","imports":["_app/immutable/start-e8be4189.js","_app/immutable/chunks/index-1a00f4d0.js","_app/immutable/chunks/singletons-43151a60.js","_app/immutable/chunks/control-a6874251.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "login",
				pattern: /^\/login\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "signup",
				pattern: /^\/signup\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "hunt/[huntId]",
				pattern: /^\/hunt\/([^/]+?)\/?$/,
				names: ["huntId"],
				types: [null],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "hunt/[huntId]/question",
				pattern: /^\/hunt\/([^/]+?)\/question\/?$/,
				names: ["huntId"],
				types: [null],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
