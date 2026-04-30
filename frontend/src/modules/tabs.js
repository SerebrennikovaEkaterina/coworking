import { setState } from "./state.js";
import { applyState } from "./view.js";

export function initTabs() {
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const view = tab.dataset.view;

      const newState = setState({ view });

      applyState(newState);
    });
  });
}