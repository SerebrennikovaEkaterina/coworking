// export function initCards (coworkings, createCard) {
//     const cardsContainer = document.querySelector(".cards");
//     if(!cardsContainer) return;

//     coworkings.forEach(item => {
//         const card = createCard(item);
//         cardsContainer.appendChild(card);
//     });
// }

export function renderCards(data, createCard) {
    const container = document.querySelector(".cards");
    if (!container) return;
  
    container.innerHTML = ""; //  очищаем
  
    data.forEach(item => {
      const card = createCard(item);
      container.appendChild(card);
    });
  }