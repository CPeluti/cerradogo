import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/index.js";
import { N as Notifications } from "../../../chunks/Notifications.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'button.svelte-1g3hasp{cursor:pointer}.field.svelte-1g3hasp{width:20rem;margin-left:auto;margin-right:auto;margin-bottom:3rem;position:relative;border-bottom:2px dashed var(--text-color);transition:500ms}.tela.svelte-1g3hasp{width:20rem;margin-left:auto;margin-right:auto;margin-bottom:3rem;position:relative}.input.svelte-1g3hasp{outline:none;border:none;overflow:hidden;margin:0;width:100%;padding:0.25rem 0;background:none;color:black;font-size:1.2em;font-weight:bold;transition:border 500ms}.input.svelte-1g3hasp:valid{color:black}.input.svelte-1g3hasp:invalid{color:orangered}.field.svelte-1g3hasp::after{content:"";position:relative;display:block;height:4px;width:100%;background:#1A73E9;transform:scaleX(0);transform-origin:0%;opacity:0;transition:all 500ms ease;top:2px}.field.svelte-1g3hasp:focus-within{border-color:transparent}.field.svelte-1g3hasp:focus-within::after{transform:scaleX(1);opacity:1}.back.svelte-1g3hasp{width:auto}button.svelte-1g3hasp{width:20rem;margin-left:auto;margin-right:auto;padding:10px 30px;font-weight:bold;border:2px solid #1A73E9;color:white;border-radius:100px;background:#1A73E9;transition:all 1000ms}button.svelte-1g3hasp:disabled{border-color:gray;background:gray;color:lightgray}h1.svelte-1g3hasp{color:#1A73E9}.center.svelte-1g3hasp{display:flex;justify-content:center}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  let nickname = "";
  let senhaConfirmar = "";
  let name = "";
  $$result.css.add(css);
  return `${validate_component(Notifications, "NotificationDisplay").$$render($$result, {}, {}, {})}
<div class="${"tela svelte-1g3hasp"}"><div><button class="${"back svelte-1g3hasp"}">Voltar</button>
    <h2 class="${"center svelte-1g3hasp"}">Criar Conta</h2>

    <div class="${"center svelte-1g3hasp"}"><h1 class="${"svelte-1g3hasp"}">Cerrado Go</h1></div>

    <div class="${"field svelte-1g3hasp"}"><input name="${"email"}" class="${"input svelte-1g3hasp"}" placeholder="${"Email"}"${add_attribute("value", email, 0)}></div>

    <div class="${"field svelte-1g3hasp"}"><input name="${"userName"}" class="${"input svelte-1g3hasp"}" placeholder="${"Usuario"}"${add_attribute("value", nickname, 0)}></div>

    <div class="${"field svelte-1g3hasp"}"><input name="${"name"}" class="${"input svelte-1g3hasp"}" placeholder="${"Seu Nome"}"${add_attribute("value", name, 0)}></div>

    <div class="${"field svelte-1g3hasp"}"><input type="${"password"}" class="${"input svelte-1g3hasp"}" placeholder="${"Senha"}"${add_attribute("value", password, 0)}></div>

    <div class="${"field svelte-1g3hasp"}"><input type="${"password"}" class="${"input svelte-1g3hasp"}" placeholder="${"Confirmar Senha"}"${add_attribute("value", senhaConfirmar, 0)}></div>

    <div class="${"center svelte-1g3hasp"}"><button class="${"svelte-1g3hasp"}">Cadastrar</button></div></div>

</div>`;
});
export {
  Page as default
};
