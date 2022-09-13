import { error } from "@sveltejs/kit";
import { request } from "$lib/request";
import {userStore} from '/src/stores/store'
import { goto } from '$app/navigation'
let userValue
userStore.subscribe(value=>{
    userValue = value
})
export async function load({ params }) {
    if(!userValue){
        await goto('/login')
        return
    }
    if (userValue && params.huntId) {
        let res = await request(`http://localhost:3030/hunt/${params.huntId}`, 'GET')
        res = await res.json()
        return {
            id: params.huntId,
            hunt: {...res},
        };
    }
    
    throw error(404, 'Not found');
}