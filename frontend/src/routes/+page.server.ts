import { request } from "$lib/request";
const req = request
export async function load({ request, setHeaders }: {request: any, setHeaders: any}) {
    let cookie = request.headers.get('cookie') 
    if(cookie){
      cookie = cookie.split('=')[1]
    } else {
      cookie=''
    }
    return {
      user: await req('http://localhost:3030/login/validate','POST', {cookie})
    };
  }