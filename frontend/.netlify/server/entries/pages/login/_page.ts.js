import { r as redirect } from "../../../chunks/index2.js";
const validate = async (parent) => {
  const { user } = await parent();
  if (user) {
    throw redirect(302, "/");
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
