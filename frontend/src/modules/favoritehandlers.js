import { toggleFavorite } from "./favorites";

export function initFavoriteButtons(onToggle) {
    const favoriteButtons = document.querySelectorAll(".favorite-btn");

    favoriteButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const id = Number(button.dataset.id);

            toggleFavorite(id);
            button.classList.toggle('active');
            if (onToggle) {
                onToggle(button);
            }
        })

    })

}