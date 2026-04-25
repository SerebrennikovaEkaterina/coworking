// document.querySelector('#app').innerHTML = `
// `

import { coworkings } from "./data.js";
import "normalize.css";
import "./style.css";
import { arrowIcon } from "./icons.js";
import { itineraryIcon } from "./icons.js";

const container = document.querySelector(".coworkings .container .cards");
const hero = document.querySelector(".hero");
const overlay = document.querySelector(".hero__overlay");
const FADE_DURATION = 600;
const HOLD_TIME = 200;

const heroImages = {
  list: "/images/hero-list.png",
  grid: "/images/hero-grid.png",
  map: "/images/hero-map.png",
};

function createCoworkingCard(coworking) {
  const card = document.createElement("li");
  card.className = "list-item card";

  const info1 = document.createElement("div");
  info1.className = "coworking-info-1 flex";

  const info2 = document.createElement("div");
  info2.className = "coworking-info-2 flex";

  const primaryBtn = document.createElement("button");
  primaryBtn.className = "primary-button btn-text";
  primaryBtn.textContent = "посетить";

  card.append(info1, info2, primaryBtn);

  const h3Title = document.createElement("h3");
  h3Title.className = "h3-title";
  h3Title.textContent = coworking.title;

  const address = document.createElement("p");
  address.className = "card__adress";
  address.textContent = coworking.address;

  const price = document.createElement("p");
  price.className = "card__price";
  price.textContent = coworking.price;

  const coworkingLink = document.createElement("a");
  coworkingLink.className = "card__link flex btn-text";
  coworkingLink.href = `./coworking.html?id=${coworking.id}`;

  coworkingLink.innerHTML = `подробнее
  ${arrowIcon}
`;

  info1.append(h3Title, address, price, coworkingLink);

  const indicator = document.createElement("div");
  indicator.className = "indicator";

  const percent = parseFloat(coworking.loadPercent);

  indicator.style.setProperty("--progress", percent);

  const loadPercentEl = document.createElement("div");
  loadPercentEl.className = "indicator__percent-text flex";
  loadPercentEl.textContent = percent + "%";

  indicator.append(loadPercentEl);
  info2.append(indicator);

  requestAnimationFrame(() => {
    indicator.classList.add("is-animated");
  });

  const btnItinerary = document.createElement("button");
  btnItinerary.className = "button itinerary flex";

  btnItinerary.innerHTML = `
  ${itineraryIcon}
`;

  const btnItineraryTxt = document.createElement("span");
  btnItineraryTxt.className = "btn-text itinerary__btn";
  btnItineraryTxt.textContent = "маршрут";
  btnItinerary.append(btnItineraryTxt);

  info2.append(btnItinerary);

  return card;
}

coworkings.forEach((item) => {
  const card = createCoworkingCard(item);
  container.appendChild(card);
});

const tabs = document.querySelectorAll(".tab");
const cardsContainer = document.querySelector(".cards");
const mapContainer = document.querySelector(".map");

// 1. загрузка
const savedView = localStorage.getItem("viewType") || "list";
applyView(savedView);

// 2. клики
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const viewType = tab.dataset.view;

    applyView(viewType);

    // сохраняем
    localStorage.setItem("viewType", viewType);
  });
});

// 3. функция
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

function changeHero(viewType) {
  overlay.classList.add("is-active");

  setTimeout(() => {
    // 🔥 ВАЖНО: меняем КЛАСС, а не background
    hero.classList.remove("hero--list", "hero--grid", "hero--map");
    hero.classList.add(`hero--${viewType}`);

    setTimeout(() => {
      overlay.classList.remove("is-active");
    }, HOLD_TIME);

  }, FADE_DURATION);
}