// export function initCards (coworkings, createCard) {
//     const cardsContainer = document.querySelector(".cards");
//     if(!cardsContainer) return;

//     coworkings.forEach(item => {
//         const card = createCard(item);
//         cardsContainer.appendChild(card);
//     });
// }

export function renderCards(data, createCard, emptyState) {
  const container = document.querySelector(".cards");
  if (!container) return;

  container.innerHTML = ""; //  очищаем

  if (!data.length) {

    const emptyMessage = document.createElement('div');
    emptyMessage.className = "empty-message";
    emptyMessage.innerHTML = `
  <h2 class="h2-title">${emptyState.title}</h2>
  <p>${emptyState.text}</p>

  ${emptyState.buttonText
        ? `
        <a
          href="${emptyState.buttonLink}"
          class="primary-button"
        >
          ${emptyState.buttonText}
        </a>
      `
        : ""
      }
`;;

    container.append(emptyMessage);

    return;
  }

  data.forEach(item => {
    const card = createCard(item);
    container.appendChild(card);
  });
}