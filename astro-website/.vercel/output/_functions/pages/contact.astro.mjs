import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_Dgem4QdF.mjs';
import 'piccolore';
import { $ as $$Sheet, a as $$ColumnLabels, b as $$SheetCell, c as $$Navbar } from '../chunks/ColumnLabels_B4Ukxukt.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const cells = [
    [
      { content: "1", styleNotes: "numbering" },
      {
        content: "You can contact me through any of the below methods. I am typically most responsive over email and slack! ",
        styleNotes: "center"
      }
    ],
    [
      { content: "2", styleNotes: "numbering" },
      { content: "Email", styleNotes: "label" },
      { content: "charmwoodrum@gmail.com", styleNotes: "email" }
    ],
    [
      { content: "3", styleNotes: "numbering" },
      { content: "Slack handle (for teens in Hack Club)", styleNotes: "label" },
      { content: "@chaook" }
    ],
    [
      { content: "4", styleNotes: "numbering" },
      { content: "LinkedIn", styleNotes: "label" },
      { content: "https://www.linkedin.com/in/charlotte-woodrum-557900370/", styleNotes: "link" }
    ]
  ];
  return renderTemplate`${renderComponent($$result, "Sheet", $$Sheet, {}, { "default": ($$result2) => renderTemplate` <link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet"> ${renderComponent($$result2, "ColumnLabels", $$ColumnLabels, { "letters": "AB" })} ${cells.map((row) => renderTemplate`${maybeRenderHead()}<div class="row"${addAttribute(`display: grid; grid-template-columns: 35px repeat(${row.length - 1}, 1fr); font-size: 12px; `, "style")}> ${row.map((cell) => {
    const content = cell.content !== void 0 ? cell.content : cell;
    const styleNotes = cell.styleNotes !== void 0 ? cell.styleNotes : cell;
    return renderTemplate`${renderComponent($$result2, "SheetCell", $$SheetCell, { "content": content, "styleNotes": styleNotes })}`;
  })} </div>`)}${renderComponent($$result2, "Navbar", $$Navbar, { "activePage": "Contact" })} ` })}`;
}, "C:/Users/dawoo/OneDrive/Documents/GitHub/personal-website-v2/astro-website/src/pages/contact.astro", void 0);

const $$file = "C:/Users/dawoo/OneDrive/Documents/GitHub/personal-website-v2/astro-website/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
