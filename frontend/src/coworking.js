import "./normalize.css"
import "./style.css";

import { renderCoworkingPage } from "./modules/renderCoworkingPage.js";
import { initFavoriteButtons } from "./modules/favoritehandlers.js";

renderCoworkingPage();
initFavoriteButtons();

const backLink = document.getElementById("back-link");

if (backLink) {
    backLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        if (window.history.length > 1) {
            window.history.back();
        } else {
            window.location.href = '/';
        }
    });
}