// document.querySelector('#app').innerHTML = `
// `

import { coworkings } from "./data.js";
import { initCards } from "./modules/cards.js";
import { initTabs } from "./modules/tabs.js";
import { initHero } from "./modules/hero.js";
import { loadComponent } from "./modules/loadComponent.js";

import "./normalize.css";
import "./style.css";
import { createCoworkingCard } from "./modules/createCoworkingCard.js";


const changeHero = initHero();

if (changeHero) {
  initTabs(changeHero)
}

initCards(coworkings, createCoworkingCard);

loadComponent("#nav-container", "/components/nav.html");
loadComponent("#header-container", "/components/header.html");



