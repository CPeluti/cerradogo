import {request} from '$lib/request'
import type {User} from '../interfaces/User'

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

export async function createSessionCookie(user: {username: string, password: string}): Promise<{user: User}> {
    try {
        let res = await request('http://localhost:3030/login', 'POST', {username: user.username, password: user.password})
        const userRes: User = await res.json()
        console.log(userRes)
        return {user: userRes}
    } catch (e) {
        throw new Error("Credenciais invalidas")
    }
}