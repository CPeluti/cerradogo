import { request } from "$lib/request";
import { redirect } from "@sveltejs/kit";

export async function load({ params, parent }: {params: any, parent: any}) {
    const {user} = await parent()
    if(!user){
        throw redirect(307, '/login');
    }
    if (params.huntId) {
        let res = await request(`https://cerradogo-server.herokuapp.com/hunt/${params.huntId}`, 'GET')
        res = await res.json()
        return {
            user,
            id: params.huntId,
            hunt: {...res},
        };
    }
}

export async function GET({ params, parent }: {params: any, parent: any}) {
    const {user} = await parent()
    if(!user){
        throw redirect(307, '/login');
    }
    if (params.huntId) {
        let res = await request(`https://cerradogo-server.herokuapp.com/hunt/${params.huntId}`, 'GET')
        res = await res.json()
        return {
            user,
            id: params.huntId,
            hunt: {...res},
        };
    }
}