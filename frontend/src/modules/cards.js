export function initCards (coworkings, createCard) {
    const cardsContainer = document.querySelector(".cards");
    if(!cardsContainer) return;

    coworkings.forEach(item => {
        const card = createCard(item);
        cardsContainer.appendChild(card);
    });
}