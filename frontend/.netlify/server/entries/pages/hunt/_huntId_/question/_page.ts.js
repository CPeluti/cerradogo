import { r as request } from "../../../../../chunks/request.js";
import { r as redirect } from "../../../../../chunks/index2.js";
async function load({ params, parent }) {
  const { user } = await parent();
  if (!user) {
    throw redirect(307, "/login");
  }
  if (params.huntId) {
    let res = await request(`https://cerradogo-server.herokuapp.comhunt/${params.huntId}/question/random`, "GET");
    res = await res.json();
    return { user, questions: { ...res }, hunt: { id: params.huntId } };
  }
}
async function GET({ params, parent }) {
  const { user } = await parent();
  if (!user) {
    throw redirect(307, "/login");
  }
  if (params.huntId) {
    let res = await request(`https://cerradogo-server.herokuapp.comhunt/${params.huntId}/question/random`, "GET");
    res = await res.json();
    return { user, questions: { ...res }, hunt: { id: params.huntId } };
  }
}
export {
  GET,
  load
};
