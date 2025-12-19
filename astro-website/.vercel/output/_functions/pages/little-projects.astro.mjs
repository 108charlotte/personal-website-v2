import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_Dgem4QdF.mjs';
import 'piccolore';
import { $ as $$Sheet, a as $$ColumnLabels, b as $$SheetCell, c as $$Navbar } from '../chunks/ColumnLabels_B4Ukxukt.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$LittleProjects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LittleProjects;
  let response = await fetch("https://api.github.com/users/108charlotte/repos?sort=updated");
  let json_repos = await response.json();
  let response_hackatime = await fetch("https://hackatime.hackclub.com/api/v1/users/U084T4KCZ8Q/stats?features=projects");
  let time_data = await response_hackatime.json();
  console.log(time_data.data.projects);
  function update_date_sort(event_a, event_b) {
    return new Date(event_b.updated_at).getTime() - new Date(event_a.updated_at).getTime();
  }
  json_repos.sort(update_date_sort);
  json_repos = json_repos.slice(0, 5);
  let top_repo_info = [];
  let hackatime_found = false;
  for (let i = 0; i < 5; i++) {
    hackatime_found = false;
    let curr_repo_name = json_repos[i].name;
    let curr_repo_description = json_repos[i].description;
    if (!curr_repo_description || curr_repo_description == "") {
      curr_repo_description = "No description found";
    }
    let curr_repo_link = json_repos[i].clone_url;
    if (curr_repo_name == "All-Roads-Lead-to-Greece") {
      let coding_time = "7h 9m";
      top_repo_info.push([curr_repo_name, curr_repo_description, coding_time, curr_repo_link]);
      continue;
    } else if (curr_repo_name == "Ab-Astro-Ad-Terram") {
      let coding_time = "29h 16m";
      top_repo_info.push([curr_repo_name, curr_repo_description, coding_time, curr_repo_link]);
      continue;
    }
    for (let j = 0; j < time_data.data.projects.length; j++) {
      if (!hackatime_found && (time_data.data.projects[j].name.replace(" ", "-") == curr_repo_name || time_data.data.projects[j].name == curr_repo_name)) {
        let coding_time = time_data.data.projects[j].text;
        top_repo_info.push([curr_repo_name, curr_repo_description, coding_time, curr_repo_link]);
        hackatime_found = true;
        break;
      }
    }
    if (!hackatime_found) {
      top_repo_info.push([curr_repo_name, curr_repo_description, "No hackatime data found", curr_repo_link]);
    }
  }
  const cells = [
    [
      { content: "1", styleNotes: "numbering" },
      {
        content: 'This is a live-updating log of my most recently updated github repos. It features some of my smaller projects but may also include upcoming bigger ones, or improvements upon those in the "Big Projects" tab! To see more of my projects, just check out my github: https://github.com/108charlotte',
        styleNotes: "center"
      }
    ],
    [
      { content: "2", styleNotes: "numbering" },
      { content: top_repo_info[0][0], styleNotes: "label" },
      { content: top_repo_info[0][1] },
      { content: top_repo_info[0][2] },
      { content: top_repo_info[0][3], styleNotes: "link" }
    ],
    [
      { content: "3", styleNotes: "numbering" },
      { content: top_repo_info[1][0], styleNotes: "label" },
      { content: top_repo_info[1][1] },
      { content: top_repo_info[1][2] },
      { content: top_repo_info[1][3], styleNotes: "link" }
    ],
    [
      { content: "4", styleNotes: "numbering" },
      { content: top_repo_info[2][0], styleNotes: "label" },
      { content: top_repo_info[2][1] },
      { content: top_repo_info[2][2] },
      { content: top_repo_info[2][3], styleNotes: "link" }
    ],
    [
      { content: "5", styleNotes: "numbering" },
      { content: top_repo_info[3][0], styleNotes: "label" },
      { content: top_repo_info[3][1] },
      { content: top_repo_info[3][2] },
      { content: top_repo_info[3][3], styleNotes: "link" }
    ],
    [
      { content: "6", styleNotes: "numbering" },
      { content: top_repo_info[4][0], styleNotes: "label" },
      { content: top_repo_info[4][1] },
      { content: top_repo_info[4][2] },
      { content: top_repo_info[4][3], styleNotes: "link" }
    ]
  ];
  return renderTemplate`${renderComponent($$result, "Sheet", $$Sheet, {}, { "default": async ($$result2) => renderTemplate` <link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet"> ${renderComponent($$result2, "ColumnLabels", $$ColumnLabels, { "letters": "ABCD" })} ${cells.map((row) => renderTemplate`${maybeRenderHead()}<div class="row"${addAttribute(`display: grid; grid-template-columns: 35px repeat(${row.length - 1}, 1fr); font-size: 12px; `, "style")}> ${row.map((cell) => {
    const content = cell.content !== void 0 ? cell.content : cell;
    const styleNotes = cell.styleNotes !== void 0 ? cell.styleNotes : cell;
    return renderTemplate`${renderComponent($$result2, "SheetCell", $$SheetCell, { "content": content, "styleNotes": styleNotes })}`;
  })} </div>`)}${renderComponent($$result2, "Navbar", $$Navbar, { "activePage": "Little Projects" })} ` })}`;
}, "C:/Users/dawoo/OneDrive/Documents/GitHub/personal-website-v2/astro-website/src/pages/little-projects.astro", void 0);

const $$file = "C:/Users/dawoo/OneDrive/Documents/GitHub/personal-website-v2/astro-website/src/pages/little-projects.astro";
const $$url = "/little-projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$LittleProjects,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
