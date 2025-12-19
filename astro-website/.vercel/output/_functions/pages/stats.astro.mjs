import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_Dgem4QdF.mjs';
import 'piccolore';
import { $ as $$Sheet, a as $$ColumnLabels, b as $$SheetCell, c as $$Navbar } from '../chunks/ColumnLabels_B4Ukxukt.mjs';
export { renderers } from '../renderers.mjs';

const $$Stats = createComponent(async ($$result, $$props, $$slots) => {
  let response = await fetch("https://hackatime.hackclub.com/api/v1/users/U084T4KCZ8Q/stats?features=languages");
  let data = await response.json();
  let language_data = [];
  let from_hackatime_langs = data.data.languages;
  for (let i = 0; i < 5; i++) {
    if (from_hackatime_langs[i].name == "Scene") {
      language_data.push(["Godot Scene editor", from_hackatime_langs[i].percent]);
    }
    language_data.push([from_hackatime_langs[i].name, from_hackatime_langs[i].percent]);
  }
  let stats = {
    // don't want to display exact total w/ minutes and seconds for privacy reasons :)
    hours: Math.trunc(data.data.total_seconds / (60 * 60)),
    // languages data apparently already sorted! 
    top_5_languages: language_data
  };
  const cells = [
    [
      { content: "1", styleNotes: "numbering" },
      {
        content: "My coding stats since February 2025 are as follows (this is live-updating!): ",
        styleNotes: "center"
      }
    ],
    [
      { content: "2", styleNotes: "numbering" },
      { content: "Total hours", styleNotes: "label" },
      { content: stats.hours }
    ],
    [
      { content: "3", styleNotes: "numbering" },
      { content: stats.top_5_languages[0][0] + " percentage", styleNotes: "label" },
      { content: stats.top_5_languages[0][1] + "%" }
    ],
    [
      { content: "4", styleNotes: "numbering" },
      { content: stats.top_5_languages[1][0] + " percentage", styleNotes: "label" },
      { content: stats.top_5_languages[1][1] + "%" }
    ],
    [
      { content: "5", styleNotes: "numbering" },
      { content: stats.top_5_languages[2][0] + " percentage", styleNotes: "label" },
      { content: stats.top_5_languages[2][1] + "%" }
    ],
    [
      { content: "6", styleNotes: "numbering" },
      { content: stats.top_5_languages[3][0] + " percentage", styleNotes: "label" },
      { content: stats.top_5_languages[3][1] + "%" }
    ],
    [
      { content: "7", styleNotes: "numbering" },
      { content: stats.top_5_languages[4][0] + " percentage", styleNotes: "label" },
      { content: stats.top_5_languages[4][1] + "%" }
    ],
    [
      { content: "8", styleNotes: "numbering" },
      { content: "*this data is collected using hack club's hackatime extension. you can check it out to the right if you are a teenager! " },
      { content: "https://hackatime.hackclub.com/", styleNotes: "link" }
    ]
  ];
  return renderTemplate`${renderComponent($$result, "Sheet", $$Sheet, {}, { "default": async ($$result2) => renderTemplate` <link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet"> ${renderComponent($$result2, "ColumnLabels", $$ColumnLabels, { "letters": "AB" })} ${cells.map((row) => renderTemplate`${maybeRenderHead()}<div class="row"${addAttribute(`display: grid; grid-template-columns: 35px repeat(${row.length - 1}, 1fr); font-size: 12px; `, "style")}> ${row.map((cell) => {
    const content = cell.content !== void 0 ? cell.content : cell;
    const styleNotes = cell.styleNotes !== void 0 ? cell.styleNotes : cell;
    return renderTemplate`${renderComponent($$result2, "SheetCell", $$SheetCell, { "content": content, "styleNotes": styleNotes })}`;
  })} </div>`)}${renderComponent($$result2, "Navbar", $$Navbar, { "activePage": "Stats" })} ` })}`;
}, "C:/Users/dawoo/OneDrive/Documents/GitHub/personal-website-v2/astro-website/src/pages/stats.astro", void 0);
const $$file = "C:/Users/dawoo/OneDrive/Documents/GitHub/personal-website-v2/astro-website/src/pages/stats.astro";
const $$url = "/stats";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Stats,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
