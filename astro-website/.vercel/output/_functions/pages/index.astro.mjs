import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_Dgem4QdF.mjs';
import 'piccolore';
import { $ as $$Sheet, a as $$ColumnLabels, b as $$SheetCell, c as $$Navbar } from '../chunks/ColumnLabels_B4Ukxukt.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const aboutMe = {
    firstName: "Charlotte",
    grade: "11th",
    hobbies: [["Coding"], ["Running"], ["Organization!"]],
    careers: [["Software Engineering"], ["AI Engineering"]]
  };
  const experience = {
    high: [["HTML"], ["CSS"], ["Python"], ["Flask"]],
    medium: [["Godot"], ["React"], ["Javascript"]],
    exploring: [["Pytorch"], ["Astro (this website!)"], ["Svelte"]]
  };
  const cells = [
    [
      { content: "1", styleNotes: "numbering" },
      {
        content: "Hello! Welcome to my excel/google sheets-inspired personal website. ",
        styleNotes: "center"
      }
    ],
    [
      { content: "2", styleNotes: "numbering" },
      { content: "Name", styleNotes: "label" },
      { content: aboutMe.firstName },
      [],
      [],
      []
    ],
    [
      { content: "3", styleNotes: "numbering" },
      { content: "Grade", styleNotes: "label" },
      { content: aboutMe.grade },
      [],
      [],
      []
    ],
    [
      { content: "4", styleNotes: "numbering" },
      { content: "Hobbies", styleNotes: "label" },
      ...aboutMe.hobbies,
      []
    ],
    [
      { content: "5", styleNotes: "numbering" },
      { content: "Careers", styleNotes: "label" },
      ...aboutMe.careers,
      [],
      []
    ],
    [{ content: "7", styleNotes: "numbering" }, { content: "Experience", styleNotes: "center" }],
    [{ content: "8", styleNotes: "numbering" }, { content: "High", styleNotes: "label" }, ...experience.high],
    [{ content: "9", styleNotes: "numbering" }, { content: "Medium", styleNotes: "label" }, ...experience.medium, []],
    [{ content: "10", styleNotes: "numbering" }, { content: "Exploring", styleNotes: "label" }, ...experience.exploring, []],
    [{ content: "11", styleNotes: "numbering" }, { content: "This website is open source! check it out at https://github.com/108charlotte/personal-website-v2" }]
  ];
  return renderTemplate`${renderComponent($$result, "Sheet", $$Sheet, {}, { "default": ($$result2) => renderTemplate` <link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet"> ${renderComponent($$result2, "ColumnLabels", $$ColumnLabels, { "letters": "ABCDE" })} ${cells.map((row) => renderTemplate`${maybeRenderHead()}<div class="row"${addAttribute(`display: grid; grid-template-columns: 35px repeat(${row.length - 1}, 1fr); font-size: 12px; `, "style")}> ${row.map((cell) => {
    const content = cell.content !== void 0 ? cell.content : cell;
    const styleNotes = cell.styleNotes !== void 0 ? cell.styleNotes : cell;
    return renderTemplate`${renderComponent($$result2, "SheetCell", $$SheetCell, { "content": content, "styleNotes": styleNotes })}`;
  })} </div>`)}${renderComponent($$result2, "Navbar", $$Navbar, { "activePage": "About" })} ` })}`;
}, "C:/Users/dawoo/OneDrive/Documents/GitHub/personal-website-v2/astro-website/src/pages/index.astro", void 0);

const $$file = "C:/Users/dawoo/OneDrive/Documents/GitHub/personal-website-v2/astro-website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
