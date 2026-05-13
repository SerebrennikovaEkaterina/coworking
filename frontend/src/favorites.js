import "./normalize.css";
import "./style.css";

import { initNavigation } from "./modules/navigation";
import { getCoworkings } from "./modules/api";
import { getFavorites } from "./modules/favorites";
import { renderCards } from "./modules/cards";
import { loadComponent } from "./modules/loadComponent";
import { createCoworkingCard } from "./modules/createCoworkingCard.js";
import { initFavoriteButtons } from "./modules/favoritehandlers.js";

loadComponent("#nav-container", "/components/nav.html").then(() => {
  initNavigation();
});

loadComponent("#header-container", "/components/header.html");

const emptyState = {
  title: "В избранном ничего нет",
  text: "Попробуйте дабавить коворкинг в избранное",
  buttonText: "Выбрать коворкинг",
  buttonLink: "/index.html"
};

const container = document.querySelector(".container");

container.classList.add("list-view");

async function renderFavorites() {

  const coworkings = await getCoworkings();

  const favoriteIds = getFavorites();

  const favoriteCoworkings = coworkings.filter((item) =>
    favoriteIds.includes(item.id)
  );

  renderCards(favoriteCoworkings, createCoworkingCard, emptyState);

  initFavoriteButtons((button) => {
    const card = button.closest(".card");

    card.remove();
    const cards = document.querySelectorAll(".coworking-card");
    if (cards.length === 0) {
      renderFavorites();
    }
  });
}

renderFavorites();
