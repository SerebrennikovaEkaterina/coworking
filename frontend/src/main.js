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

loadComponent("#nav-container", "/components/nav.html").then(() => {
  initNavigation();
  applyState(state);
});

loadComponent("#header-container", "/components/header.html");

const MIN_DISPLAY_TIME = 2000; // 2 секунды

const startTime = Date.now();

const DEBUG_LOADER = false;

window.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  const loader = document.getElementById("loader");

  const elapsed = Date.now() - startTime;
  const remaining = Math.max(0, MIN_DISPLAY_TIME - elapsed);

  if (DEBUG_LOADER) return; // не скрываем
  
  setTimeout(() => {
    app.classList.add("loaded");
    loader.classList.add("hidden");

    setTimeout(() => loader.remove(), 400);
  }, remaining);
});
