import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../chunks/index.js";
import { N as Notifications } from "../../../../chunks/Notifications.js";
import { P as ProgressBar } from "../../../../chunks/ProgressBar.js";
const HuntMap_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1ycepdd{text-transform:uppercase;width:100%;display:flex;justify-content:center;justify-items:center}.container.svelte-1ycepdd{width:360px;display:flex;flex-direction:column;justify-content:center;justify-items:center}button.svelte-1ycepdd{text-transform:uppercase;cursor:pointer;width:90px;height:90px;border-radius:100%;border-width:0;font-size:14px;font-family:'Roboto';background-color:#1A73E9;color:white}button.svelte-1ycepdd:disabled{cursor:auto;filter:grayscale(100%)\n    }.secondary.svelte-1ycepdd{width:60px;height:60px}#coletar.svelte-1ycepdd{background-color:#AE1C93}#mapa.svelte-1ycepdd{margin-bottom:50px;width:100%;height:310px;padding:0px}#nome_caca.svelte-1ycepdd{text-align:center;padding:10px;font-family:'Roboto';font-weight:500;font-size:20px;font-style:normal}#pct.svelte-1ycepdd{text-align:center;padding:10px;font-family:'Roboto';font-weight:500;font-size:20px;font-style:normal}",
  map: null
};
const HuntMap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { hunt } = $$props;
  let { id } = $$props;
  let { progress } = $$props;
  if ($$props.hunt === void 0 && $$bindings.hunt && hunt !== void 0)
    $$bindings.hunt(hunt);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.progress === void 0 && $$bindings.progress && progress !== void 0)
    $$bindings.progress(progress);
  $$result.css.add(css);
  return `<main class="${"svelte-1ycepdd"}">${validate_component(Notifications, "NotificationDisplay").$$render($$result, {}, {}, {})}
    <div class="${"container svelte-1ycepdd"}"><div id="${"nome_caca"}" class="${"svelte-1ycepdd"}">${escape(hunt.name)}</div>
        ${validate_component(ProgressBar, "ProgressBar").$$render($$result, { progress, color: "#3FE106" }, {}, {})}
        <div id="${"pct"}" class="${"svelte-1ycepdd"}">${escape(progress * hunt.totalQuestions)}/${escape(hunt.totalQuestions)}</div>
        <img id="${"mapa"}" src="${"/images/google_maps.jpg"}" alt="${"mapa"}" class="${"svelte-1ycepdd"}">
        <div><button id="${"perfil"}" class="${"secondary svelte-1ycepdd"}" disabled>perfil</button>
            <button id="${"dica"}" class="${"secondary svelte-1ycepdd"}">dica</button>
            <button id="${"coletar"}" class="${"svelte-1ycepdd"}">coletar</button>
            <button id="${"menu"}" class="${"secondary svelte-1ycepdd"}">menu</button>
            <button id="${"podio"}" class="${"secondary svelte-1ycepdd"}" disabled>podio</button></div></div>
</main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let progress = 0;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(HuntMap, "HuntMap").$$render($$result, { hunt: data.hunt, id: data.id, progress }, {}, {})}`;
});
export {
  Page as default
};
