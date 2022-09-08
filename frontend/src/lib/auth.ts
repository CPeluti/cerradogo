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

export async function createSessionCookie(user: {username: string, password: string}): Promise<User> {
    try {
        let res = await request('http://localhost:3030/login', 'POST', {username: user.username, password: user.password})
        const userRes: User = await res.json()
        return userRes
    } catch (e) {
        throw new Error("Credenciais invalidas")
    }
}

export async function signUpUser(user: {name: string, email: string, nickname: string, password: string}): Promise<Boolean>{
    try {
        let res = await request('http://localhost:3030/user', 'POST', {nickname: user.nickname, email: user.email, password: user.password, name: user.name, avatar: '', experience: 0, rank: 0, leaguePoints: 0, hunts: []})
        return true
    } catch(e) {
        throw new Error("Não foi possivel cadastrar o usuário")
    }
}