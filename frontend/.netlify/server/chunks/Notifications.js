import { c as create_ssr_component, f as each, e as escape } from "./index.js";
const Notifications_svelte_svelte_type_style_lang = "";
const css = {
  code: '.toasts.svelte-vlqkf6.svelte-vlqkf6.svelte-vlqkf6{list-style:none;position:fixed;top:0;right:0;padding:0;margin:0;z-index:9999}.toasts.svelte-vlqkf6>.toast.svelte-vlqkf6.svelte-vlqkf6{display:flex;align-items:center;position:relative;margin:1vh 1vw;min-width:98vw;position:relative;animation:svelte-vlqkf6-animate-in 600ms forwards;color:#fff;min-height:8vh}.toasts.svelte-vlqkf6>.toast.svelte-vlqkf6>button.svelte-vlqkf6{position:absolute;font-size:18px;right:0;margin:6px;color:#fff;outline:none;border:0;background-color:transparent}.toasts.svelte-vlqkf6>.toast.svelte-vlqkf6>.content.svelte-vlqkf6{padding:1vw;display:flex;font-weight:500;margin-right:20px}.toasts.svelte-vlqkf6>.toast.svelte-vlqkf6>.progress.svelte-vlqkf6{position:absolute;bottom:0;background-color:rgb(0, 0, 0, 0.3);height:6px;width:100%;animation-name:svelte-vlqkf6-shrink;animation-timing-function:linear;animation-fill-mode:forwards}.toasts.svelte-vlqkf6>.toast.svelte-vlqkf6.svelte-vlqkf6:before,.toasts.svelte-vlqkf6>.toast.svelte-vlqkf6.svelte-vlqkf6:after{content:"";position:absolute;z-index:-1;top:50%;bottom:0;left:1vw;right:1vw;border-radius:100px / 10px}.toasts.svelte-vlqkf6>.toast.svelte-vlqkf6.svelte-vlqkf6:after{right:1vw;left:auto;transform:skew(8deg) rotate(3deg)}@keyframes svelte-vlqkf6-animate-in{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215, .61, .355, 1);animation-timing-function:cubic-bezier(.215, .61, .355, 1)}0%{opacity:0;transform:translate3d(3000px, 0, 0)}60%{opacity:1;transform:translate3d(-25px, 0, 0)}75%{transform:translate3d(10px, 0, 0)}90%{transform:translate3d(-5px, 0, 0)}to{transform:none}}@keyframes svelte-vlqkf6-shrink{0%{width:98vw}100%{width:0}}@media(min-width: 480px){@keyframes svelte-vlqkf6-animate-in{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215, .61, .355, 1);animation-timing-function:cubic-bezier(.215, .61, .355, 1)}0%{opacity:0;transform:translate3d(3000px, 0, 0)}60%{opacity:1;transform:translate3d(-25px, 0, 0)}75%{transform:translate3d(10px, 0, 0)}90%{transform:translate3d(-5px, 0, 0)}to{transform:none}}@keyframes svelte-vlqkf6-shrink{0%{width:40vw}100%{width:0}}}@media screen and (min-width: 600px){.toasts.svelte-vlqkf6>.toast.svelte-vlqkf6.svelte-vlqkf6{min-width:40vw;min-height:auto}.toasts.svelte-vlqkf6>.toast.svelte-vlqkf6>.content.svelte-vlqkf6{justify-content:flex-start}}',
  map: null
};
const Notifications = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { themes = {
    danger: "#bb2124",
    success: "#22bb33",
    warning: "#f0ad4e",
    info: "#5bc0de",
    default: "#aaaaaa"
  } } = $$props;
  let { timeout = 3e3 } = $$props;
  let { sessionKey = "byk-toasts" } = $$props;
  let toasts = [];
  if ($$props.themes === void 0 && $$bindings.themes && themes !== void 0)
    $$bindings.themes(themes);
  if ($$props.timeout === void 0 && $$bindings.timeout && timeout !== void 0)
    $$bindings.timeout(timeout);
  if ($$props.sessionKey === void 0 && $$bindings.sessionKey && sessionKey !== void 0)
    $$bindings.sessionKey(sessionKey);
  $$result.css.add(css);
  return `<ul class="${"toasts svelte-vlqkf6"}">${each(toasts, (toast) => {
    return `<li class="${"toast svelte-vlqkf6"}" style="${"background: " + escape(toast.background, true) + ";"}">${toast.persist ? `<button class="${"close svelte-vlqkf6"}">\u2715
      </button>` : ``}
      <div class="${"content svelte-vlqkf6"}">${escape(toast.message)}</div>
      <div class="${"progress svelte-vlqkf6"}" style="${"animation-duration: " + escape(toast.timeout, true) + "ms;"}"></div>
    </li>`;
  })}
</ul>`;
});
export {
  Notifications as N
};
