import { request } from "$lib/request";
import {userStore} from '../../../../stores/store'
import type { User } from "src/interfaces/User";
import { redirect } from "@sveltejs/kit";
let userValue: User | any
userStore.subscribe(value=>{
    userValue = value
})
export async function load({ params }: {params: any}) {
    if(!userValue){
        throw redirect(307, '/login');
    }
    if (params.huntId) {
        let res = await request(`http://localhost:3030/hunt/${params.huntId}/question/random`, 'GET')
        res = await res.json()
        return {questions: {...res}, hunt: {id: params.huntId}};
    }
}