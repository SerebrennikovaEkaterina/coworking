// document.querySelector('#app').innerHTML = `
// `
import { coworkings } from "./data.js";
import { initCards } from "./modules/cards.js";
import { createCoworkingCard } from "./modules/createCoworkingCard.js";
import { initTabs } from "./modules/tabs.js";
import { initNavigation } from "./modules/navigation.js";
import { loadComponent } from "./modules/loadComponent.js";
import { getState } from "./modules/state.js";
import { applyState } from "./modules/view.js";

import "./normalize.css";
import "./style.css";

console.log("🚀 main");

// 1. восстановить состояние
const state = getState();

console.log(state);

// 2. применить UI


// 3. инициализация
initCards(coworkings, createCoworkingCard);
initTabs();

loadComponent("#nav-container", "/components/nav.html")
  .then(() => {
    initNavigation();
    applyState(state);
  });

loadComponent("#header-container", "/components/header.html");