import { redirect } from "@sveltejs/kit";
export async function load({ parent }: {parent: any}) {
    const {user} = await parent()
    console.log(user)
    if(!user){
        throw redirect(307, '/login');
    }
    return {}
    
}