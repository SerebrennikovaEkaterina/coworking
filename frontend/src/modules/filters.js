export function initFilters() {
  const form = document.querySelector(".catalog-form");
  if (!form) return;

  initApplyButtons(form);
  initClearButtons(form);
}

function initApplyButtons(form) {
  const buttons = document.querySelectorAll(".apply-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filters = getFilters(form);
      console.log(filters);
    });
  });
}

function initClearButtons(form) {
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