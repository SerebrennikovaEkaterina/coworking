export function applyState(state) {
  const currentPage =
    window.location.pathname.split("/").pop().replace(".html", "") || "index";

  console.log("applyState:", state, "| real page:", currentPage);

  // 👇 навигация по реальной странице, НЕ по state
  updateNavigation(currentPage);

  // 👇 только если реально index
  if (currentPage === "index") {
    updateTabs(state.view || "list");
    updateLayout(state.view || "list");
  }
}

function updateNavigation(page) {
  console.log("NAV PAGE:", page);

  const links = document.querySelectorAll(".nav-link");

  links.forEach(link => link.classList.remove("active"));

  const activeLink = document.querySelector(
    `.nav-link[data-page="${page}"]`
  );

  console.log("FOUND LINK:", activeLink);

  activeLink?.classList.add("active");
}

function updateTabs(view) {
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach(tab => tab.classList.remove("active"));

  document
    .querySelector(`[data-view="${view}"]`)
    ?.classList.add("active");
}
function updateLayout(view) {
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