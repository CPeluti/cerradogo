import { c as create_ssr_component, e as escape } from "./index.js";
const ProgressBar_svelte_svelte_type_style_lang = "";
const css = {
  code: ".background.svelte-me07og{filter:drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.45));border-radius:15px;background-color:#D9D9D9}",
  map: null
};
const ProgressBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { progress } = $$props;
  let { color } = $$props;
  if ($$props.progress === void 0 && $$bindings.progress && progress !== void 0)
    $$bindings.progress(progress);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css);
  return `<div class="${"background svelte-me07og"}"><div style="${"border-radius: 15px; background-color:" + escape(color, true) + "; height: 6px; width: " + escape(progress * 100, true) + "%"}"></div>
</div>`;
});
export {
  ProgressBar as P
};
