import { setState } from "./state.js";

export function initNavigation() {
  const links = document.querySelectorAll(".nav-link");

  links.forEach(link => {
    link.addEventListener("click", () => {
      const page = link.dataset.page;

      if (!page) return;

      setState({ page });

      window.location.href = `${page}.html`;
    });
  });
}