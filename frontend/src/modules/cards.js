import { createCoworkingCard } from "./createCoworkingCard";

export function initCards (coworkings, createCard) {
    const cardsContainer = document.querySelector(".cards");
    if(!cardsContainer) return;

    coworkings.forEach(item => {
        const card = createCoworkingCard(item);
        cardsContainer.appendChild(card);
    });
}