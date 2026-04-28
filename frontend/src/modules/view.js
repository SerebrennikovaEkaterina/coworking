export function applyState(state) {
  console.log("👉 applyState:", state);

  updateNavigation(state.page);
  updateTabs(state.view);
  updateLayout(state.view);
  updateHero(state.view);
}

function updateNavigation(page) {
  console.log("👉 updateNavigation");

  const links = document.querySelectorAll(".nav-link");

  links.forEach((link) => link.classList.remove("active"));

  document.querySelector(`[data-page="${page}"]`)?.classList.add("active");
}

function updateTabs(view) {
  console.log("👉 updateTabs");

  const tabs = document.querySelectorAll(".tab");

  tabs.forEach((tab) => tab.classList.remove("active"));

  document.querySelector(`[data-view="${view}"]`)?.classList.add("active");
}

function updateLayout(view) {
  console.log("👉 updateLayout");

  const cards = document.querySelector(".cards");
  const map = document.querySelector(".map");

  if (!cards || !map) return;

  cards.classList.remove("view-list", "view-grid");

  if (view === "map") {
    cards.classList.add("hidden");
    map.classList.remove("hidden");
  } else {
    cards.classList.remove("hidden");
    map.classList.add("hidden");
    cards.classList.add(`view-${view}`);
  }
}

function updateHero(view) {
  console.log("👉 updateHero");

  const hero = document.querySelector(".hero");
  const overlay = document.querySelector(".hero__overlay");
  const FADE_DURATION = 600;
  const HOLD_TIME = 200;

  if (!hero || !overlay) return;

  overlay.classList.add("is-active");

  setTimeout(() => {
    hero.classList.remove("hero--list", "hero--grid", "hero--map");
    hero.classList.add(`hero--${view}`);

    setTimeout(() => {
      overlay.classList.remove("is-active");
    }, HOLD_TIME);
  }, FADE_DURATION);
}
