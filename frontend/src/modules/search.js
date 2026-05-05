import { updateFilterState } from "./filterState.js";

export function initSearch(onChange) {
  const input = document.querySelector(".search__input");

  input.addEventListener("input", (e) => {
    updateFilterState({
      search: e.target.value,
    });

    onChange();
  });
}