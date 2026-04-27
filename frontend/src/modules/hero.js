export function initHero() {
  const hero = document.querySelector(".hero");
  const overlay = document.querySelector(".hero__overlay");
  const FADE_DURATION = 600;
  const HOLD_TIME = 200;

  if (!hero || !overlay) return null;

  return function changeHero(viewType) {
    overlay.classList.add("is-active");

    setTimeout(() => {
      hero.classList.remove("hero--list", "hero--grid", "hero--map");
      hero.classList.add(`hero--${viewType}`);

      setTimeout(() => {
        overlay.classList.remove("is-active");
      }, HOLD_TIME);
    }, FADE_DURATION);
  };
}
