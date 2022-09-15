import { r as redirect } from "../../chunks/index2.js";
const validate = async (parent) => {
  const { user } = await parent();
  if (!user) {
    console.log("aqui");
    throw redirect(307, "/login");
  }
  return { user };
};
async function load({ parent }) {
  return await validate(parent);
}
async function GET({ parent }) {
  return await validate(parent);
}
export {
  GET,
  load
};
