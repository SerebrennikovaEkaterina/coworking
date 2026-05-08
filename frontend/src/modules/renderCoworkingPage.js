import { coworkings } from "../data.js";

export function renderCoworkingPage() {
  const params = new URLSearchParams(window.location.search);

  const id = Number(params.get("id"));

  const coworking = coworkings.find((item) => item.id === id);

  if (!coworking) return;

  renderHero(coworking);
  renderAboutCoworking(coworking);
  renderAmenities(coworking);
  renderGallery(coworking);
}

function renderHero(coworking) {
  const coworkingCover = document.querySelector(
    ".coworking-page__hero-content"
  );
  coworkingCover.style.backgroundImage = `url(${coworking.cover})`;
  console.log("coworking.cover", coworking.cover);

  const coworkingTitle = document.querySelector(".h1-title-coworking-page");
  coworkingTitle.textContent = coworking.title;
}

function renderAboutCoworking(coworking) {
  const coworkingPrice = document.querySelector(".price");
  coworkingPrice.textContent = coworking.price;

  const coworkingAddress = document.querySelector(".address");
  coworkingAddress.textContent = coworking.address;
}

function renderAmenities(coworking) {
  const amenitiesContainer = document.querySelector(".amenities__container");

  if (!amenitiesContainer || !coworking.amenities) return;

  amenitiesContainer.innerHTML = coworking.amenities
    .map(
      (item) => `
        <div class="coworking-amenity">
          ${item}
        </div>
      `
    )
    .join("");
}

function renderGallery(coworking) {
  const gallery = document.querySelector(".gallery__images-container");

  gallery.innerHTML = coworking.gallery
    .map((src) => `<img src="${src}" alt="${coworking.title}">`)
    .join("");
}
