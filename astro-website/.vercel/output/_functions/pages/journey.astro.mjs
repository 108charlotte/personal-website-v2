import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_Dgem4QdF.mjs';
import 'piccolore';
import { $ as $$Sheet, a as $$ColumnLabels, b as $$SheetCell, c as $$Navbar } from '../chunks/ColumnLabels_B4Ukxukt.mjs';
export { renderers } from '../renderers.mjs';

const $$Journey = createComponent(($$result, $$props, $$slots) => {
  const cells = [
    [
      { content: "1", styleNotes: "numbering" },
      {
        content: "This page is dedicated to talking more about how I got into programming and possibly provide resources to others who may want to explore computer science or AI (such as Hack Club, CS50, etc.)! ",
        styleNotes: "center"
      }
    ],
    [
      { content: "2", styleNotes: "numbering" },
      { content: "Elementary-middle school", styleNotes: "label" },
      { content: "Independently explored free online programming courses, especially those from codecademy and freecodecamp" }
    ],
    [
      { content: "3", styleNotes: "numbering" },
      { content: "6th-8th grade (2020-2023)", styleNotes: "label" },
      { content: "Joined my school's VEX robotics team as a programmer" }
    ],
    [
      { content: "4", styleNotes: "numbering" },
      { content: "8th grade (2022)", styleNotes: "label" },
      { content: "First official programming course, a largely self-paced semester-long elective teaching Javascript and Python through CodeHS" }
    ],
    [
      { content: "5", styleNotes: "numbering" },
      { content: "9th grade-current (2023-current)", styleNotes: "label" },
      { content: "FRC robotics team 2415, coding subteam" }
    ],
    [
      { content: "6", styleNotes: "numbering" },
      { content: "10th grade first semester (2024)", styleNotes: "label" },
      { content: "Took CS50 independently throughout first semester and with a concentrated effort during winter break. As my first structured and completed introduction to programming, this course taught me how to think algorithmically. " }
    ],
    [
      { content: "7", styleNotes: "numbering" },
      { content: "10th grade second semester (2025)", styleNotes: "label" },
      { content: "Joined Hack Club, participated in High Seas and created my first GitHub projects" }
    ],
    [
      { content: "8", styleNotes: "numbering" },
      { content: "11th grade summer (2025)", styleNotes: "label" },
      { content: `\u2022 Coded 4 projects for 60 hours total to qualify for Hack Club's Shipwrecked hackathon (attended in early August)

\u2022 Interned at IPMD Inc. using prompt engineering to customize chatbot responses based on emotional analysis

\u2022 Completed a 2-week virtual Stanford Pre-Collegiate Institutes "Intro to AI" course where I created a model to identify FRC game piece objects` }
    ],
    [
      { content: "9", styleNotes: "numbering" },
      { content: "11th grade first semester (2025)", styleNotes: "highlight" },
      { content: "\u2022 Organized Daydream Atlanta\n\n\u2022 Tutored python + pygame and intro to web development through Schoolhouse.world\n\n\u2022 Attended Hack Club's Parthenon hackathon for underrepresented genders in NYC\n\n\u2022 Joined Hack Club's Special Activities Division to organize community events in the Slack\n\n\u2022 Community project reviewer for the Athena Awards\n\n\u2022 Glenn Institute Civic ambassador for robotics\n\n\u2022 Wrote an article for school's STEM newspaper on the impacts of AI on software engineering careers", styleNotes: "highlight" }
    ],
    [
      { content: "10", styleNotes: "numbering" },
      { content: "Current/upcoming pursuits" },
      { content: `\u2022 Organizing a 2026 spring Athena/Days of Service event through Hack Club (an event for underrepresented genders in tech)

\u2022 RSVPed to organize another game jam (Campfire)

\u2022 Interning for the Judicial Council of Georgia/Administrative Office of the Courts application development team for 2 weeks during Janterm

\u2022 Launching my school's first CS peer tutoring program as coding club lead

\u2022 Competing in technovation girls with "Lovelace coders" team, working with Living Dictionaries to design an application for endangered language learning` }
    ]
  ];
  return renderTemplate`${renderComponent($$result, "Sheet", $$Sheet, {}, { "default": ($$result2) => renderTemplate` <link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet"> ${renderComponent($$result2, "ColumnLabels", $$ColumnLabels, { "letters": "AB" })} ${cells.map((row) => renderTemplate`${maybeRenderHead()}<div class="row"${addAttribute(`display: grid; grid-template-columns: 35px repeat(${row.length - 1}, 1fr); font-size: 12px; `, "style")}> ${row.map((cell) => {
    const content = cell.content !== void 0 ? cell.content : cell;
    const styleNotes = cell.styleNotes !== void 0 ? cell.styleNotes : cell;
    return renderTemplate`${renderComponent($$result2, "SheetCell", $$SheetCell, { "content": content, "styleNotes": styleNotes })}`;
  })} </div>`)}${renderComponent($$result2, "Navbar", $$Navbar, { "activePage": "Journey" })} ` })}`;
}, "C:/Users/dawoo/OneDrive/Documents/GitHub/personal-website-v2/astro-website/src/pages/journey.astro", void 0);

const $$file = "C:/Users/dawoo/OneDrive/Documents/GitHub/personal-website-v2/astro-website/src/pages/journey.astro";
const $$url = "/journey";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Journey,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
