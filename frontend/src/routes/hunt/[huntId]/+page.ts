import { error } from "@sveltejs/kit";
import { request } from "$lib/request";

export async function load({ params }) {
    if (params.huntId) {
        let res = await request(`http://localhost:3030/hunt/${params.huntId}`, 'GET')
        res = await res.json()
        return {
            id: params.huntId,
            hunt: {...res},
        };
    }
    
    throw error(404, 'Not found');
}