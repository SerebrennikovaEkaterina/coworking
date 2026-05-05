import { updateFilterState } from "./filterState.js";

function getFilters(form) {
  const formData = new FormData(form);

  return {
    spaceType: formData.getAll("space-type"),
    amenities: formData.getAll("amenities"),
    rentTerm: formData.get("rent__term"),
    workSchedule: formData.get("work_schedule"),
  };
}

export function initFilters(onChange) {
  const form = document.querySelector(".catalog-form");
  if (!form) return;

  const applyButtons = document.querySelectorAll(".apply-btn");

  applyButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filters = getFilters(form);

      updateFilterState(filters);

      onChange();
    });
  });
}

export function initFilters(onChange) {
  const form = document.querySelector(".catalog-form");
  if (!form) return;

  initApplyButtons(form, onChange);
  initClearButtons(form, onChange);
}

function initApplyButtons(form, onChange) {
  const buttons = document.querySelectorAll(".apply-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filters = getFilters(form);

      updateFilterState(filters); // 🔥 добавили
      onChange();                 // 🔥 добавили
    });
  });
}

function initClearButtons(form, onChange) {
  const buttons = document.querySelectorAll(".clear-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const dropdown = btn.closest(".filter-dropdown");
      const inputs = dropdown.querySelectorAll("input");

      inputs.forEach((input) => {
        if (input.type === "checkbox" || input.type === "radio") {
          input.checked = false;
        } else {
          input.value = "";
        }
      });

      const filters = getFilters(form);
      updateFilterState(filters);
      onChange();
    });
  });
}

function getFilters(form) {
  const formData = new FormData(form);

  return {
    spaceType: formData.getAll("space-type"),
    amenities: formData.getAll("amenities"),
    rentTerm: formData.get("rent__term"),
    workSchedule: formData.get("work_schedule"),
    minSeats: formData.get("seats-min"),
    maxSeats: formData.get("seats-max"),
    search: formData.get("search"),
  };
}