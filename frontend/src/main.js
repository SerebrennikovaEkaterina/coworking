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

import './normalize.css';
import './style.css';

const state = getState();

const currentPage =
  window.location.pathname.split("/").pop().replace(".html", "") || "index";

console.log("REAL PAGE:", currentPage);
console.log("STATE PAGE:", state.page);

// 👉 если открыли index, но в state другая страница — редиректим
if (
  currentPage === "index" &&
  state.page &&
  state.page !== "index"
) {
  window.location.replace(`${state.page}.html`);
}

// 👉 только главная
if (currentPage === "index") {
  initCards(coworkings, createCoworkingCard);
  initTabs();
}

// 👉 nav
loadComponent("#nav-container", "/components/nav.html").then(() => {
  initNavigation();
  applyState(state);
});

// 👉 header
loadComponent("#header-container", "/components/header.html");

const MIN_DISPLAY_TIME = 2000;
const startTime = Date.now();

const DEBUG_LOADER = false;

window.addEventListener("load", () => {
  const app = document.getElementById("app");
  const loader = document.getElementById("loader");
  const elapsed = Date.now() - startTime;
  
  console.log("on load:", Date.now());
  const remaining = Math.max(0, MIN_DISPLAY_TIME - elapsed);
  console.log("remaining", remaining);
  if (DEBUG_LOADER) return; // не скрываем

  setTimeout(() => {
    app.classList.add("loaded");
    loader.classList.add("hidden");
    document.body.classList.remove("is-loading");
    setTimeout(() => loader.remove(), 400);
  }, remaining);
});
