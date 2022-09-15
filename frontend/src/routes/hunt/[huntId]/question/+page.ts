import { request } from "$lib/request";
import { redirect } from "@sveltejs/kit";
    
export async function load({ params, parent }: {params: any, parent: any}) {
    const {user} = await parent()
    if(!user){
        throw redirect(307, '/login');
    }
    if (params.huntId) {
        let res = await request(`https://cerradogo-server.herokuapp.comhunt/${params.huntId}/question/random`, 'GET')
        res = await res.json()
        return {user,questions: {...res}, hunt: {id: params.huntId}};
    }
}

export async function GET({ params, parent }: {params: any, parent: any}) {
    const {user} = await parent()
    if(!user){
        throw redirect(307, '/login');
    }
    if (params.huntId) {
        let res = await request(`https://cerradogo-server.herokuapp.comhunt/${params.huntId}/question/random`, 'GET')
        res = await res.json()
        return {user,questions: {...res}, hunt: {id: params.huntId}};
    }
}