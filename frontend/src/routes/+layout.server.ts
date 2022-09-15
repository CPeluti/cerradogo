import { request } from "$lib/request";
const req = request
const auth = async (request: any) => {
  let cookie = request.headers.get('cookie')
    if(cookie){
      cookie = cookie.split('=')[1]
    } else {
      cookie='{}'
    }
    let result = await req('https://cerradogo-server.herokuapp.com/login/validate','POST', {cookie})
    if (result.status !== 401){
      result =  await result.json()
      return {
        user: result
      };
    }
    return {}
}
export async function load({ request, setHeaders }: {request: any, setHeaders: any}) {
  console.log('aqui1')
  return await auth(request)
}
export async function GET({ request, setHeaders }: {request: any, setHeaders: any}) {
  return await auth(request)
}