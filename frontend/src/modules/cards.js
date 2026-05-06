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

    if (!data.length) {
      container.innerHTML = `
        <div class="empty-state">
          Ничего не найдено <br/>
          Попробуйте ослабить фильтры
        </div>
      `;
      return;
    }
  
    data.forEach(item => {
      const card = createCard(item);
      container.appendChild(card);
    });
  }