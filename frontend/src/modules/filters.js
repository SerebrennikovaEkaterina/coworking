import { updateFilterState } from "./filterState.js";

export function initFilters(onChange) {
  const form = document.querySelector(".catalog-form");
  if (!form) return;

  initApplyButtons(form, onChange);
  initClearButtons(form, onChange);
}

function initApplyButtons(form, onChange) {
  const buttons = form.querySelectorAll(".apply-btn"); 

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filters = getFilters(form);

      console.log("FILTERS:", filters); 

      updateFilterState(filters);
      onChange();

      const dropdown = btn.closest(".filter-dropdown");
      dropdown.classList.remove("is-open"); 
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
    rentTerm: formData.get("rent-term"),
    workSchedule: formData.get("work_schedule"),
    minSeats: formData.get("seats-min"),
    maxSeats: formData.get("seats-max"),
    search: formData.get("search"),
  };
}
