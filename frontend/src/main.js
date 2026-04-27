// document.querySelector('#app').innerHTML = `
// `

import { coworkings } from "./data.js";
import { initCards } from "./modules/cards.js";
import { initTabs } from "./modules/tabs.js";
import { initHero } from "./modules/hero.js"
import { loadComponent } from "./modules/loadComponent.js";
import { setActiveLink } from "./modules/navigation.js";

import "./normalize.css";
import "./style.css";


const changeHero = initHero();

if (changeHero) {
  initTabs(changeHero)
}

initCards(coworkings);

loadComponent("#nav-container", "/components/nav.html");
loadComponent("#header-container", "/components/header.html");



