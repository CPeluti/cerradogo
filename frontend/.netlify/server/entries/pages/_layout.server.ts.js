import { r as request } from "../../chunks/request.js";
const req = request;
const auth = async (request2) => {
  let cookie = request2.headers.get("cookie");
  if (cookie) {
    cookie = cookie.split("=")[1];
  } else {
    cookie = "{}";
  }
  let result = await req("http://localhost:3030/login/validate", "POST", { cookie });
  if (result.status !== 401) {
    result = await result.json();
    return {
      user: result
    };
  }
  return {};
};
async function load({ request: request2, setHeaders }) {
  console.log("aqui1");
  return await auth(request2);
}
async function GET({ request: request2, setHeaders }) {
  return await auth(request2);
}
export {
  GET,
  load
};
