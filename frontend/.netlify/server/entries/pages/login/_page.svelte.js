import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/index.js";
import { N as Notifications } from "../../../chunks/Notifications.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".btn.svelte-1g7vm89:hover{cursor:pointer}.btn.svelte-1g7vm89{text-decoration:none;color:black;background-color:white;display:flex;justify-content:center;align-items:center;border-style:solid;border-width:1px;border-color:black;border-radius:100px;font-weight:bold;text-transform:uppercase;font-size:14px;margin-bottom:10px;width:130px;height:40px}.page.svelte-1g7vm89{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;vertical-align:middle;justify-content:space-between}.input.svelte-1g7vm89{padding-left:20px;margin-bottom:20px;border-radius:40px;width:250px;height:45px}.container.svelte-1g7vm89{display:flex;flex-direction:column}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let username = "";
  let password = "";
  $$result.css.add(css);
  return `${validate_component(Notifications, "NotificationDisplay").$$render($$result, {}, {}, {})}
<div class="${"page svelte-1g7vm89"}"><img src="${"/images/Group_3.png"}" alt="${"group"}">
    <div class="${"container svelte-1g7vm89"}"><input class="${"input svelte-1g7vm89"}" placeholder="${"E-Mail"}"${add_attribute("value", username, 0)}>
        <input class="${"input svelte-1g7vm89"}" type="${"password"}" placeholder="${"Password"}"${add_attribute("value", password, 0)}></div>
    <button class="${"btn svelte-1g7vm89"}" href="${"/"}">entrar</button>
    
    <a class="${"btn svelte-1g7vm89"}" href="${"/signup"}">cadastrar</a>
</div>`;
});
export {
  Page as default
};
