import "./normalize.css"
import "./style.css";

import { initNavigation } from "./modules/navigation";
import { coworkings } from "./data";
import { getFavorites } from "./modules/favorites";
import { renderCards } from "./modules/cards";
import { loadComponent } from "./modules/loadComponent";
import { createCoworkingCard } from "./modules/createCoworkingCard.js";
import { initFavoriteButtons } from "./modules/favoritehandlers.js";

loadComponent("#nav-container", "/components/nav.html").then(() => {
    initNavigation();
});

loadComponent("#header-container", "/components/header.html");

const favoriteIds = getFavorites();


const favoriteCoworkings = coworkings.filter((item) => favoriteIds.includes(item.id));

const emptyMessage = "Ничего не найдено, попробуйте добавить коворкинг в избранное"

renderCards(favoriteCoworkings, createCoworkingCard, emptyMessage);

const container = document.querySelector(".container");

container.classList.add("list-view");

initFavoriteButtons(renderCards(favoriteCoworkings, createCoworkingCard, emptyMessage));

