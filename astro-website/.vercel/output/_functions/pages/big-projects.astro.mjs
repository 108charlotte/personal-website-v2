import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_Dgem4QdF.mjs';
import 'piccolore';
import { $ as $$Sheet, a as $$ColumnLabels, b as $$SheetCell, c as $$Navbar } from '../chunks/ColumnLabels_B4Ukxukt.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$BigProjects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BigProjects;
  const projects = [
    { name: "Ab Astro Ad Terram", timeline: "July 2025", type: "technical", description: "A flask-based text adventure game! Inspired by my previous attempt, this one uses a SQLite database to make loading faster and provide more scalability than storing the map in session storage did. ", github: "https://github.com/108charlotte/Ab-Astro-Ad-Terram", live: "https://108charlotte.pythonanywhere.com/" },
    { name: "Daydream Atlanta", timeline: "August-September 2025", type: "hackathon", description: "Organizer for Hack Club's (https://hackclub.com/) Atlanta daydream satellite event. Assisted with budgeting, run of show planning, and Godot. Here're some stats: \n\n\u2192 89% ship rate (% of attendees who published a game on itch.io and open-sourced their code on github) \n\n\u2192 49 NPS score", live: "https://daydream.hackclub.com/atlanta" },
    { name: "Raspberry Pi Wall Monitor", timeline: "June 2025", type: "technical", description: "An old monitor I hooked up to my Raspberry Pi 4 and designed a custom, minimalist, and productivity-first dashboard to motivate myself and keep my desk organized. \n\nI also used my SenseHAT to light up its LED matrix based on the current CPU temperature to let me know when it was overheating, since I don't have a fan or cooling system", github: "https://github.com/108charlotte/raspberry-pi-monitor-display", live: "https://108charlotte.github.io/magic-mirror/" }
  ];
  const cells = [
    [
      { content: "1", styleNotes: "numbering" },
      {
        content: "Below are some of my project highlights. All of my technical projects can be found on my github (https://github.com/108charlotte)! ",
        styleNotes: "center"
      }
    ],
    [
      { content: "2", styleNotes: "numbering" },
      { content: projects[0]["name"] + " (" + projects[0]["timeline"] + ")", styleNotes: "label" },
      { content: projects[0]["description"] },
      { content: "Github: " + projects[0]["github"] + "\n\nLive: " + projects[0]["live"] }
    ],
    [
      { content: "3", styleNotes: "numbering" },
      { content: projects[1]["name"] + " (" + projects[1]["timeline"] + ")", styleNotes: "label" },
      { content: projects[1]["description"] },
      { content: projects[1]["live"], styleNotes: "link" }
    ],
    [
      { content: "4", styleNotes: "numbering" },
      { content: projects[2]["name"] + " (" + projects[2]["timeline"] + ")", styleNotes: "label" },
      { content: projects[2]["description"] },
      { content: "Github: " + projects[2]["github"] + "\n\nLive: " + projects[2]["live"] }
    ]
  ];
  return renderTemplate`${renderComponent($$result, "Sheet", $$Sheet, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ColumnLabels", $$ColumnLabels, { "letters": "ABC" })} <link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet"> ${cells.map((row) => renderTemplate`${maybeRenderHead()}<div class="row"${addAttribute(`display: grid; grid-template-columns: 35px repeat(${row.length - 1}, 1fr); font-size: 12px; `, "style")}> ${row.map((cell) => {
    const content = cell.content !== void 0 ? cell.content : cell;
    const styleNotes = cell.styleNotes !== void 0 ? cell.styleNotes : cell;
    return renderTemplate`${renderComponent($$result2, "SheetCell", $$SheetCell, { "content": content, "styleNotes": styleNotes })}`;
  })} </div>`)}${renderComponent($$result2, "Navbar", $$Navbar, { "activePage": "Big Projects" })} ` })}`;
}, "C:/Users/dawoo/OneDrive/Documents/GitHub/personal-website-v2/astro-website/src/pages/big-projects.astro", void 0);

const $$file = "C:/Users/dawoo/OneDrive/Documents/GitHub/personal-website-v2/astro-website/src/pages/big-projects.astro";
const $$url = "/big-projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$BigProjects,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
