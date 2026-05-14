// document.querySelector('#app').innerHTML = `

import { createCoworkingCard } from "./modules/createCoworkingCard.js";
import { initTabs } from "./modules/tabs.js";
import { initNavigation } from "./modules/navigation.js";
import { loadComponent } from "./modules/loadComponent.js";
import { getState } from "./modules/state.js";
import { applyState } from "./modules/view.js";
import { initSearch } from "./modules/search.js";
import { renderCards } from "./modules/cards.js";
import { initFilters } from "./modules/filters.js";
import { initDropdowns } from "./modules/dropdown.js";
import { filterData } from "./modules/filterData.js";
import { getFilterState } from "./modules/filterState.js";
import { initFavoriteButtons } from "./modules/favoritehandlers.js";
import { getCoworkings } from "./modules/api.js";

import "./normalize.css";
import "./style.css";

const state = getState();

const currentPage =
  window.location.pathname.split("/").pop().replace(".html", "") || "index";

document.addEventListener("DOMContentLoaded", async () => {
  const coworkings =
    await getCoworkings();

  function updateUI() {
    const state = getFilterState();

    const result = filterData(
      coworkings,
      state
    );

    const emptyState = {
      title: "Ничего не найдено,",
      text: "попробуйте ослабить фильтры",
    };

    renderCards(
      result,
      createCoworkingCard,
      emptyState
    );

    initFavoriteButtons();
  }

  initSearch(updateUI);
  initFilters(updateUI);
  initDropdowns();

  updateUI();

  // форма
  const form = document.querySelector(".catalog-form");
  if (form) {
    form.addEventListener("submit", (e) => e.preventDefault());
  }

  // вкладки (не конфликтуют)
  if (currentPage === "index") {
    initTabs();
  }
});

loadComponent("#nav-container", "/components/nav.html").then(() => {
  initNavigation();
  applyState(state);
});

loadComponent("#header-container", "/components/header.html");

const MIN_DISPLAY_TIME = 2000;
const startTime = Date.now();

const DEBUG_LOADER = false;

const hasVisited = sessionStorage.getItem("hasVisited");

if (hasVisited) {
  // 👉 уже был — сразу показываем приложение
  document.getElementById("loader")?.remove();
  document.getElementById("app")?.classList.add("loaded");
} else {
  // 👉 первый заход
  sessionStorage.setItem("hasVisited", "true");

  window.addEventListener("load", () => {
    const app = document.getElementById("app");
    const loader = document.getElementById("loader");

    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, MIN_DISPLAY_TIME - elapsed);

    console.log("FIRST VISIT");
    console.log("remaining:", remaining);

    if (DEBUG_LOADER) return;

    setTimeout(() => {
      app.classList.add("loaded");
      loader.classList.add("hidden");
      document.body.classList.remove("is-loading");

      setTimeout(() => loader.remove(), 400);
    }, remaining);
  });
}

const toggle =
  document.querySelector(".filters-toggle");

const panel =
  document.getElementById("filters-panel");

toggle.addEventListener("click", () => {
  const isOpen =
    toggle.getAttribute("aria-expanded")
    === "true";

  toggle.setAttribute(
    "aria-expanded",
    String(!isOpen)
  );

  panel.classList.toggle(
    "is-open",
    !isOpen
  );

  toggle.classList.toggle(
    "filters-toggle--is-active",
    !isOpen
  );

const filtersPanel = document.querySelector('.filters-panel');

if (!isOpen) {
    setTimeout(() => {
  panel.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}, 200);
  }
});
