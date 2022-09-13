import { request } from "$lib/request";
const req = request
export async function load({ request, setHeaders }: {request: any, setHeaders: any}) {
    return {
      user: await req('http://localhost:3030/','POST', request.headers.get('cookie'))
    };
  }