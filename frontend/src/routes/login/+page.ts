import { redirect } from "@sveltejs/kit";
const validate = async (parent: any) => {
    const {user} = await parent()
    if(user){
        throw redirect(302, '/');
    }
    return {user}
}

export async function load({ parent }: {parent: any}) {
    return await validate(parent)
}
export async function GET({ parent }: {parent: any}) {
    return await validate(parent)
}