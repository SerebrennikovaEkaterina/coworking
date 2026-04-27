export function initTabs(changeHero) {
    const tabs = document.querySelectorAll(".tab");
const cardsContainer = document.querySelector(".cards");
const mapContainer = document.querySelector(".map");

const savedView = localStorage.getItem("viewType") || "list";
applyView(savedView);

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const viewType = tab.dataset.view;

    applyView(viewType);

    localStorage.setItem("viewType", viewType);
  });
});

function applyView(viewType) {
  // активный таб
  tabs.forEach(t => t.classList.remove("active"));
  const activeTab = document.querySelector(`[data-view="${viewType}"]`);
  activeTab?.classList.add("active");

  cardsContainer.classList.remove("view-list", "view-grid");

  // hero.classList.remove("hero--list", "hero--grid", "hero--map");
  // hero.classList.add(`hero--${viewType}`);

  changeHero(viewType);

  if (viewType === "map") {
    cardsContainer.classList.add("hidden");
    mapContainer.classList.remove("hidden");
  } else {
    cardsContainer.classList.remove("hidden");
    mapContainer.classList.add("hidden");
    cardsContainer.classList.add(`view-${viewType}`);
  }
}

}