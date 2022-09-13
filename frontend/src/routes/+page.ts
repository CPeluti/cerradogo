import { error } from "@sveltejs/kit";
import {userStore} from '../stores/store'
import { goto } from '$app/navigation'
let userValue
userStore.subscribe(value=>{
    userValue = value
})
export async function load({ params }) {
    if(!userValue){
        await goto('/login')
    }
    return {}
    
    throw error(404, 'Not found');
}