import { setState, getState } from "./state.js";

export function initNavigation() {
  const links = document.querySelectorAll(".nav-link");

  // восстановление active после загрузки страницы
  const state = getState();

  const activeLink = document.querySelector(
    `[data-page="${state.page}"]`
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

      // сохраняем состояние
      setState({ page });

      // ждём завершения анимации
      setTimeout(() => {
        window.location.href = `${page}.html`;
      }, 300);
    });
  });
}