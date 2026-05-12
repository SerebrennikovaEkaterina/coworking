import { coworkings } from "../data.js";

import { toggleFavorite, isFavorite, } from "./favorites.js";

import { amenitiesMap } from "./configs/amenitiesMap.js";

import { mapIcon } from "../assets/icons.js";

import { favoriteIcon } from "../assets/icons.js";

export function renderCoworkingPage() {
  const params = new URLSearchParams(window.location.search);

  const id = Number(params.get("id"));

  const coworking = coworkings.find((item) => item.id === id);

  if (!coworking) return;

  renderHero(coworking);
  renderAboutCoworking(coworking);
  renderCoworkingDescription(coworking);
  renderAmenities(coworking);
  renderGallery(coworking);
}

function renderHero(coworking) {
  const favorite = isFavorite(coworking.id);

  const coworkingPageHeroContent = document.querySelector(
    ".coworking-page__hero-content"
  );
  coworkingPageHeroContent.style.backgroundImage = `url(${coworking.cover})`;
  console.log("coworking.cover", coworking.cover);

  const coworkingTitle = document.querySelector(".h1-title-coworking-page");
  coworkingTitle.textContent = coworking.title;

  const favoriteBtn = document.createElement("button");
  favoriteBtn.className = "favorite-btn flex coworking-page__hero-favorite-btn";
  favoriteBtn.innerHTML = `${favoriteIcon}`;
  favoriteBtn.dataset.id = `${coworking.id}`;
  favoriteBtn.setAttribute("aria-label", "Добавить в избранное");

  if (favorite) {
    favoriteBtn.classList.add("active")
  }
  coworkingPageHeroContent.append(favoriteBtn);
}

function renderAboutCoworking(coworking) {
  const aboutCoworkingInfo = document.querySelector(".about-coworking__info");

  if (coworking.address) {
    const coworkingAddressContainer = document.createElement("div");
    coworkingAddressContainer.className = "address-container";
    aboutCoworkingInfo.append(coworkingAddressContainer);
    coworkingAddressContainer.innerHTML = `${mapIcon}<div class="address">${coworking.address}</div>`;
  }

  if (coworking.price) {
    const coworkingPrice = document.createElement("div");
    coworkingPrice.className = "price";
    aboutCoworkingInfo.append(coworkingPrice);
    coworkingPrice.textContent = `${coworking.price}`;
  }

  const actions = document.querySelector(".about-coworking__actions");
  const visitLink = document.createElement("a");

  visitLink.className = "btn-text primary-button";
  visitLink.textContent = "посетить коворкинг";

  actions.appendChild(visitLink);
}

function renderCoworkingDescription(coworking) {
  const section = document.querySelector(".coworking-description");

  if (!coworking.description) {
    return;
  }

  section.innerHTML = `
  <div class="container">
  <h2 class="h2-title">Об этом коворкинге</h2>
  <p class="description">${coworking.description}</p>
  </div>
  `;
}

function renderAmenities(coworking) {
  const container = document.querySelector(".amenities__container");

  if (!container) return;

  container.innerHTML = coworking.amenities
    .map((amenity) => {
      const amenityData = amenitiesMap[amenity];

      return `
        <li class="amenity-item flex">
          <svg class="amenity-icon">
            <use href="/icons/sprite.svg#${amenityData.icon}"></use>
          </svg>

          <span>${amenityData.label}</span>
        </li>
      `;
    })
    .join("");
}

function renderGallery(coworking) {
  const gallery = document.querySelector(".gallery__images-container");

  if (!gallery) return;

  const nextBtn = document.querySelector(".gallery-btn.next");
  const prevBtn = document.querySelector(".gallery-btn.prev");

  let currentIndex = 0;

  gallery.innerHTML = coworking.gallery
    .map((src) => `<img src="${src}" alt="${coworking.title}">`)
    .join("");

  function updateButtons() {
    const maxIndex = coworking.gallery.length - 1;

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === maxIndex;
  }

  function updateSlider() {
    const slide = gallery.querySelector("img");
    const slideWidth = slide.clientWidth;

    const gap = parseInt(getComputedStyle(gallery).gap) || 0;

    const offset = currentIndex * (slideWidth + gap);

    gallery.style.transform = `translateX(-${offset}px)`;

    updateButtons();
  }

  //ВАЖНО: начальное состояние кнопок (до первого рендера)
  nextBtn.disabled = coworking.gallery.length <= 1;
  prevBtn.disabled = true;

  nextBtn.addEventListener("click", () => {
    if (currentIndex < coworking.gallery.length - 1) {
      currentIndex++;
      updateSlider();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  updateSlider();
}
