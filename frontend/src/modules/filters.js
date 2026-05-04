export function initFilters() {
  const filters = document.querySelectorAll(".filter");

  if (!filters.length) return;

  filters.forEach((filter) => {
    const button = filter.querySelector(".filter-btn");
    const dropdown = filter.querySelector(".filter-dropdown");
    const buttonHeader = filter.querySelector(".filter-dropdown__header");

    if (!button || !dropdown) return;

    button.addEventListener("click", (event) => {
      event.stopPropagation();

      const isOpen = dropdown.classList.contains("is-open");

      closeAllDropdowns();

      if (!isOpen) {
        dropdown.classList.add("is-open");
      }
    });

    if (buttonHeader) {
      buttonHeader.addEventListener("click", (event) => {
        event.stopPropagation();
        event.preventDefault();
        dropdown.classList.remove("is-open");
      });
    }

    dropdown.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });

  document.addEventListener("click", () => {
    closeAllDropdowns();
  });
}

function closeAllDropdowns() {
  document.querySelectorAll(".filter-dropdown").forEach((dropdown) => {
    dropdown.classList.remove("is-open");
  });
}
