import {request} from '$lib/request'
export async function tokenClaims(token: string): Promise<object> {
    if(token){
        try{
            let res = await request('http://localhost:3030/login/validate', 'POST', {},{'authorization': token} )
            res = await res.json()
            console.log(res)
        } catch (e) {
            return {}
        }
    }
    return {}
}

export async function createSessionCookie(user: {username: string, password: string}): Promise<{user: object, token: string}> {
    try {
        let res = await request('http://localhost:3030/login', 'POST', {username: user.username, password: user.password})
        res = await res.json()
        return res
    } catch (e) {
        throw new Error("Credenciais invalidas")
    }
}