import { c as create_ssr_component, h as createEventDispatcher, e as escape, j as null_to_empty, d as add_attribute, f as each, v as validate_component } from "../../../../../chunks/index.js";
const AnswerBtn_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "@media only screen and (min-width: 0px){.answer-btn.svelte-3mc7aj{margin:0.2rem auto;padding:0.5rem;width:400px;height:40px;border:none;border-radius:50px;background-image:linear-gradient(to right, #6C92F4 , #1A73E9);cursor:pointer;display:block;color:white;text-align:center;line-height:20px;text-transform:uppercase;font-weight:bold}}@media only screen and (min-width: 1000px){.answer-btn.svelte-3mc7aj{width:300px;margin:0.3rem 0.3rem}}.right.svelte-3mc7aj{background-image:linear-gradient(to right, #A8F46C , #37E91A);cursor:default}.wrong.svelte-3mc7aj{cursor:default;background-image:linear-gradient(to right, #F46C6C , #E91A1A)}.notvisible.svelte-3mc7aj{visibility:hidden}",
  map: null
};
const AnswerBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { answer } = $$props;
  let { icon } = $$props;
  let { right = false } = $$props;
  let { wrong = false } = $$props;
  let { notvisible = false } = $$props;
  createEventDispatcher();
  if ($$props.answer === void 0 && $$bindings.answer && answer !== void 0)
    $$bindings.answer(answer);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.right === void 0 && $$bindings.right && right !== void 0)
    $$bindings.right(right);
  if ($$props.wrong === void 0 && $$bindings.wrong && wrong !== void 0)
    $$bindings.wrong(wrong);
  if ($$props.notvisible === void 0 && $$bindings.notvisible && notvisible !== void 0)
    $$bindings.notvisible(notvisible);
  $$result.css.add(css$2);
  return `<button class="${[
    "answer-btn svelte-3mc7aj",
    (right ? "right" : "") + " " + (wrong ? "wrong" : "") + " " + (notvisible ? "notvisible" : "")
  ].join(" ").trim()}">${escape(answer)} <i class="${escape(null_to_empty(icon), true) + " svelte-3mc7aj"}"></i>   
</button>`;
});
const Question_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "button.svelte-1szga5z{margin-top:100px;padding:0.5rem;width:400px;height:40px;border:none;border-radius:50px;background-image:linear-gradient(to right, #6C92F4 , #1A73E9);cursor:pointer;display:block;color:white;text-align:center;line-height:20px;text-transform:uppercase;font-weight:bold}div.svelte-1szga5z{display:flex;flex-wrap:wrap;margin-left:auto;margin-right:auto;margin-top:1rem}.qst.svelte-1szga5z{display:flex;flex-direction:column;width:100%}h2.svelte-1szga5z{text-transform:uppercase;font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;font-weight:normal;text-align:center;vertical-align:middle;display:flex;font-size:larger;margin:2rem auto;margin-left:auto;margin-right:auto}img.svelte-1szga5z{max-width:300px;width:40%;margin:auto}#options.svelte-1szga5z{display:flex;flex-direction:column;margin-left:auto;margin-right:auto}",
  map: null
};
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
const Question = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { question } = $$props;
  let { hunt } = $$props;
  let { user } = $$props;
  const image = `data:${question.img.fileType};base64,${question.img.file}`;
  const quest = question.question;
  let answers = shuffle(question.answers);
  if ($$props.question === void 0 && $$bindings.question && question !== void 0)
    $$bindings.question(question);
  if ($$props.hunt === void 0 && $$bindings.hunt && hunt !== void 0)
    $$bindings.hunt(hunt);
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  $$result.css.add(css$1);
  return `<div class="${"svelte-1szga5z"}"><div class="${"qst svelte-1szga5z"}"><h2 class="${"svelte-1szga5z"}">${`${`${escape(quest)}`}`}</h2></div>
    <img${add_attribute("src", image, 0)} alt="${"question"}" class="${"svelte-1szga5z"}">
    
    
    <div id="${"options"}" class="${"svelte-1szga5z"}">${each(answers, (a) => {
    return `${validate_component(AnswerBtn, "AnswerBtn").$$render(
      $$result,
      {
        right: a.right && a.selected === "true" ? true : false,
        wrong: !a.right && a.selected === "true" ? true : false,
        notvisible: a.selected !== "false" ? false : true,
        answer: a.text,
        icon: a.right && a.selected === "true" ? "fas fa-check" : a.selected === "true" ? "fas fa-x" : ""
      },
      {},
      {}
    )}`;
  })} 
        ${``}</div>
    
    
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#question.svelte-14j9qax{width:100%;display:flex;margin:auto;height:50%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div id="${"question"}" class="${"svelte-14j9qax"}">${validate_component(Question, "Question").$$render(
    $$result,
    {
      question: data.questions,
      hunt: data.hunt,
      user: data.user
    },
    {},
    {}
  )}
</div>`;
});
export {
  Page as default
};
