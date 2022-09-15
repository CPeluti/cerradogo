import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component, i as is_promise, n as noop, f as each } from "../../chunks/index.js";
import { P as ProgressBar } from "../../chunks/ProgressBar.js";
const HuntCard_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".img.svelte-tnd1xd{margin-right:15px;width:70px;height:70px;border-radius:100px}.footer.svelte-tnd1xd{display:flex;font-size:10px;font-family:'Roboto';justify-content:space-between}.container.svelte-tnd1xd{display:flex;width:100%;height:100%;flex-direction:column;justify-content:space-around}.progress-frac.svelte-tnd1xd{left:10px;font-style:normal;font-weight:500;font-size:12px;line-height:16px;text-transform:uppercase;color:#929292}.hunt-container.svelte-tnd1xd{display:flex;height:70px;width:300px;cursor:pointer;justify-content:center;align-items:center}.name.svelte-tnd1xd{font-family:'Roboto';font-style:normal;font-weight:700;font-size:14px;line-height:16px;text-transform:uppercase;color:#000000;text-shadow:0px 4px 4px rgba(0, 0, 0, 0.25)}",
  map: null
};
const HuntCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b;
  let { hunt } = $$props;
  let { progress } = $$props;
  const image = `data:${(_a = hunt.img) == null ? void 0 : _a.fileType};base64,${(_b = hunt.img) == null ? void 0 : _b.file}`;
  if ($$props.hunt === void 0 && $$bindings.hunt && hunt !== void 0)
    $$bindings.hunt(hunt);
  if ($$props.progress === void 0 && $$bindings.progress && progress !== void 0)
    $$bindings.progress(progress);
  $$result.css.add(css$2);
  return `<main><div class="${"hunt-container svelte-tnd1xd"}"><img class="${"img svelte-tnd1xd"}"${add_attribute("src", image, 0)} alt="${"Foto"}">
        <div class="${"container svelte-tnd1xd"}"><div class="${"name svelte-tnd1xd"}">${escape(hunt.name)}</div>
            <div><div class="${"footer svelte-tnd1xd"}"><div class="${"progress-frac svelte-tnd1xd"}">Pistas: ${escape(progress * hunt.totalQuestions)}/${escape(hunt.totalQuestions)}</div></div></div>
            ${validate_component(ProgressBar, "ProgressBar").$$render($$result, { color: "#3FE106", progress }, {}, {})}</div></div>
</main>`;
});
const Perfil_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".icon.svelte-zawq4u{display:flex;flex-direction:column;justify-content:center}h1.svelte-zawq4u{font-family:'Roboto';margin:0;padding:0;font-size:24px}h2.svelte-zawq4u{margin:0;padding:0;font-size:12px;font-family:'Roboto';color:#A8A8A8;text-transform:uppercase}.text.svelte-zawq4u{padding-left:15px;display:flex;flex-direction:column;justify-content:center;justify-items:center}#img_temp.svelte-zawq4u{margin-bottom:10px;background-color:gray;width:50px;height:50px;border-radius:100%}.container.svelte-zawq4u{padding-top:20px;display:flex;background-color:white;width:360px;height:100%}",
  map: null
};
const Perfil = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b;
  let { user } = $$props;
  const img = `data:${(_a = user == null ? void 0 : user.img) == null ? void 0 : _a.fileType};base64,${(_b = user == null ? void 0 : user.img) == null ? void 0 : _b.file}`;
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  $$result.css.add(css$1);
  return `<div class="${"container svelte-zawq4u"}"><div class="${"icon svelte-zawq4u"}">${(user == null ? void 0 : user.img) ? `<img id="${"img_temp"}" alt="${"profile"}"${add_attribute("src", img, 0)} class="${"svelte-zawq4u"}">` : `<div id="${"img_temp"}" class="${"svelte-zawq4u"}"></div>`}
        ${validate_component(ProgressBar, "ProgressBar").$$render(
    $$result,
    {
      color: "#06FFF0",
      progress: (user == null ? void 0 : user.experience) % 100 / 100
    },
    {},
    {}
  )}</div>
    <div class="${"text svelte-zawq4u"}"><span><h1 class="${"svelte-zawq4u"}">${escape(user == null ? void 0 : user.nickname)}</h1></span>
        <span><h2 class="${"svelte-zawq4u"}">lvl: ${escape(Math.floor((user == null ? void 0 : user.experience) / 100))}</h2></span></div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#perfil.svelte-1urzxbj{position:fixed;height:120px;z-index:999}.container.svelte-1urzxbj{display:flex;justify-content:center;justify-items:center;width:100%;height:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const promise = fetch("http://localhost:3030/hunt", { method: "GET" }).then((res) => res.json());
  let { data } = $$props;
  let huntProgress = (hunt) => {
    const hunts = data.user["hunts"];
    hunt = hunts.find((el) => el.huntId === hunt["_id"]);
    if (hunt) {
      return hunt.progress;
    } else {
      return 0;
    }
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${data.user ? `<div class="${"container svelte-1urzxbj"}"><div style="${"display: flex; flex-direction: column;"}"><div id="${"perfil"}" class="${"svelte-1urzxbj"}">${validate_component(Perfil, "Perfil").$$render($$result, { user: data.user }, {}, {})}</div>
            <div style="${"margin-top: 150px;"}">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(data2) {
      return `
                ${each(data2, (hunt) => {
        return `<div style="${"margin-bottom: 20px;"}">${validate_component(HuntCard, "HuntCard").$$render($$result, { hunt, progress: huntProgress(hunt) }, {}, {})}
                </div>`;
      })}
                
                `;
    }(__value);
  }(promise)}</div></div></div>` : ``}`;
});
export {
  Page as default
};
