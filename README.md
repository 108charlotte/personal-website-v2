# personal-website-v2
A google sheets-inspired personal website! 

## tabs
- about: a general, high-level overview of my interests and skills
- big projects: highlights my biggest/favorite projects, including non-technical pursuits like organizing Daydream Atlanta!
- little projects: pulls my top 5 most recently updated repos from GitHub and retrieves hackatime data for them (see tools for more info)
- journey: a running log of everything coding-related I've done since elementary school, with my current pursuits highlighted. I also list my upcoming projects which I am working on now!
- stats: coding data pulled from hackatime, including total hours coded and percent of coding time spent in my top 5 languages (both the top 5 languages and the percentage of time spent updates from the api)
- contact: a simple page including my email, linkedin, and slack handle for teens in hack club

## tools
- Figma to visualize the interface before development (20-ish minute sketch-up as a new user)
- Astro as the primary framework
- GitHub's REST API for data on my most recently updated repos
- Hackatime's API for time spent coding stats (on little projects and stats pages)

## resources
I used a lot of astro documentation (https://docs.astro.build/en/) to get started, and a lot of stack overflow to solve issues I ran into. [This article](https://compile7.org/implement-data-structures/how-to-implement-sparse-matrix-in-astro/) helped me implement the grid logic I wanted! 

## about development
I enjoyed re-learning how to use APIs to fetch data, and also struggled a lot with styling the layout with CSS. I ended up using CSS grids, and a margin of -1 to make the borders between cells the thickness I wanted them to be. 

## cool features
Recently updated repos and time tracking are both live-updating! Also, links in their own cells are highlighted with a css "link" class, but the links which are in cells also including non-link text are detected using Javascript and assigned link tags which span from the start to the end of the URL, leaving the rest of the cell un-linked. 
