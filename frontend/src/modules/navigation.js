import { setState, getState } from "./state.js";

export function initNavigation() {
  const links = document.querySelectorAll(".nav-link");

  const currentPage =
    window.location.pathname
      .split("/")
      .pop()
      .replace(".html", "") || "index";

  const activeLink = document.querySelector(
    `[data-page="${currentPage}"]`
  );

  activeLink?.classList.add("active");

  links.forEach(link => {
    link.addEventListener("click", e => {

      const page = link.dataset.page;

      if (!page) return;

      e.preventDefault();

      // убираем active у всех
      links.forEach(l => l.classList.remove("active"));

      // добавляем active текущей
      link.classList.add("active");

      // ждём завершения анимации
      setTimeout(() => {
        window.location.href = `${page}.html`;
      }, 300);
    });
  });
}