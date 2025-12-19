import { e as createComponent, f as createAstro, h as addAttribute, l as renderHead, n as renderSlot, r as renderTemplate, m as maybeRenderHead, k as renderComponent, o as Fragment } from './astro/server_Dgem4QdF.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                */

const $$Astro$3 = createAstro();
const $$Sheet = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Sheet;
  return renderTemplate`<html lang="en" data-astro-cid-myemtfnu> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>Charlotte's Sheet</title>${renderHead()}</head> <body data-astro-cid-myemtfnu> <header data-astro-cid-myemtfnu> <img src="/favicon.svg" width="30px" style="display: inline-block; vertical-align: middle; " alt="A hand-drawn computer logo with the text CW.dev displayed on the screen" data-astro-cid-myemtfnu> <h1 style="display: inline-block; vertical-align: middle; " data-astro-cid-myemtfnu>Charlotte's Sheet</h1> </header> <main data-astro-cid-myemtfnu> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/Users/dawoo/OneDrive/Documents/GitHub/personal-website-v2/astro-website/src/layouts/Sheet.astro", void 0);

const $$Astro$2 = createAstro();
const $$SheetCell = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SheetCell;
  const { content, styleNotes } = Astro2.props;
  let link_detected = false;
  let before_link = "";
  let full_link = "";
  let after_link = "";
  let everything = [];
  let link_elements = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz./1234567890-";
  for (let i = 0; i < content.length; i++) {
    let first_8_chars = content.slice(i, i + 8);
    full_link = "";
    if (styleNotes != "link" && first_8_chars == "https://") {
      after_link = "";
      link_detected = true;
      full_link = first_8_chars;
      let j = 8 + i;
      while (j < content.length && link_elements.includes(content[j])) {
        full_link += content[j];
        j += 1;
      }
      after_link = content.slice(j, content.length);
      everything.push([before_link + "", full_link + ""]);
      before_link = "";
      full_link = "";
      i = j - 1;
    } else {
      before_link += content[i];
    }
  }
  return renderTemplate`${maybeRenderHead()}<div id="container"${addAttribute(styleNotes, "class")} data-astro-cid-vw3e5pyv>  <!--used copilot help to fix syntax of expression--> ${styleNotes === "email" ? renderTemplate`<a href="mailto:charmwoodrum@gmail.com" data-astro-cid-vw3e5pyv>${content}</a>` : styleNotes === "link" ? renderTemplate`<a${addAttribute(content, "href")} target="_blank" data-astro-cid-vw3e5pyv>${content}</a>` : link_detected ? renderTemplate`<p data-astro-cid-vw3e5pyv> ${everything.map(function(one_link) {
    return renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-vw3e5pyv": true }, { "default": ($$result2) => renderTemplate`${one_link[0]}<a style="display: inline-block;" target="_blank"${addAttribute(one_link[1], "href")} data-astro-cid-vw3e5pyv>${one_link[1]}</a> ` })}`;
  })} ${after_link} </p>` : renderTemplate`<p data-astro-cid-vw3e5pyv>${content}</p>`} </div>`;
}, "C:/Users/dawoo/OneDrive/Documents/GitHub/personal-website-v2/astro-website/src/components/SheetCell.astro", void 0);

const $$Astro$1 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navbar;
  const { activePage } = Astro2.props;
  const pages = [
    { name: "About", href: "/" },
    { name: "Big Projects", href: "/big-projects" },
    { name: "Little Projects", href: "/little-projects" },
    { name: "Journey", href: "/journey" },
    { name: "Stats", href: "/stats" },
    { name: "Contact", href: "/contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<div id="container" data-astro-cid-5blmo7yk>  <ul class="navbar-scrollable" data-astro-cid-5blmo7yk> <li style="background-color: rgb(200, 200, 200); border: solid rgb(200, 200, 200) 1px;" data-astro-cid-5blmo7yk>&nbsp;&nbsp;&nbsp;</li> ${pages.map((page) => renderTemplate`<li${addAttribute(activePage === page.name ? "active" : void 0, "id")} data-astro-cid-5blmo7yk> <a${addAttribute(page.href, "href")} data-astro-cid-5blmo7yk>${page.name}</a> </li>`)} </ul> </div>`;
}, "C:/Users/dawoo/OneDrive/Documents/GitHub/personal-website-v2/astro-website/src/components/Navbar.astro", void 0);

const $$Astro = createAstro();
const $$ColumnLabels = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ColumnLabels;
  const { letters } = Astro2.props;
  let letter_array = letters.split("");
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`display: grid; grid-template-columns: 35px repeat(${letters.length}, 1fr); margin: 0px; padding: 0px;`, "style")} data-astro-cid-qwshn4cf>  <div class="header-labels" data-astro-cid-qwshn4cf></div> ${letter_array.map(
    (letter) => renderTemplate`<p class="header-labels" data-astro-cid-qwshn4cf>${letter}</p>`
  )} </div>`;
}, "C:/Users/dawoo/OneDrive/Documents/GitHub/personal-website-v2/astro-website/src/components/ColumnLabels.astro", void 0);

export { $$Sheet as $, $$ColumnLabels as a, $$SheetCell as b, $$Navbar as c };
