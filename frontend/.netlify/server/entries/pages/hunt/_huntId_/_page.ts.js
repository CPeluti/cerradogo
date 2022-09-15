import { r as request } from "../../../../chunks/request.js";
import { r as redirect } from "../../../../chunks/index2.js";
async function load({ params, parent }) {
  const { user } = await parent();
  if (!user) {
    throw redirect(307, "/login");
  }
  if (params.huntId) {
    let res = await request(`https://cerradogo-server.herokuapp.com/hunt/${params.huntId}`, "GET");
    res = await res.json();
    return {
      user,
      id: params.huntId,
      hunt: { ...res }
    };
  }
}
async function GET({ params, parent }) {
  const { user } = await parent();
  if (!user) {
    throw redirect(307, "/login");
  }
  if (params.huntId) {
    let res = await request(`https://cerradogo-server.herokuapp.com/hunt/${params.huntId}`, "GET");
    res = await res.json();
    return {
      user,
      id: params.huntId,
      hunt: { ...res }
    };
  }
}
export {
  GET,
  load
};
