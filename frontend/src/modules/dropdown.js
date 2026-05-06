export function initDropdowns() {
    const filters = document.querySelectorAll(".filter");
  
    if (!filters.length) return;
  
    filters.forEach((filter) => {
      const button = filter.querySelector(".filter-btn");
      const dropdown = filter.querySelector(".filter-dropdown");
      const header = filter.querySelector(".filter-dropdown__header");
  
      if (!button || !dropdown) return;
  
      // открыть / закрыть
      button.addEventListener("click", (event) => {
        event.stopPropagation();
  
        const isOpen = dropdown.classList.contains("is-open");
  
        closeAllDropdowns();
  
        if (!isOpen) {
          dropdown.classList.add("is-open");
        }
      });
  
      // закрытие по header
      if (header) {
        header.addEventListener("click", (event) => {
          event.stopPropagation();
          dropdown.classList.remove("is-open");
        });
      }
  
      // клик внутри — не закрывает
      dropdown.addEventListener("click", (event) => {
        event.stopPropagation();
      });
    });
  
    // клик вне
    document.addEventListener("click", () => {
      closeAllDropdowns();
    });
  }
  
  export function closeAllDropdowns() {
    document.querySelectorAll(".filter-dropdown").forEach((dropdown) => {
      dropdown.classList.remove("is-open");
    });
  }