import * as cookie from 'cookie'
import {tokenClaims} from '$lib/auth'
import type { GetSession, Handle } from '@sveltejs/kit'
// export const getSession = async (event) => {
//     const {session} = cookie.parse(event.request.headers.get('cookie') || '')
//     try {
//         const claims = await tokenClaims(session) 
//         return {
//             user: {
//                 valid: true,
//                 ...claims
//             }
//         }
//     } catch {
//         return {valid: false}
//     }
// }

export const handle: Handle = async ({event, resolve}) => {
    const cookieHeader = event.request.headers.get('cookie')
    const cookies = cookie.parse(cookieHeader ?? '')

    if (!cookies.session) {
        return await resolve(event)
    }
    console.log(cookies)
} 