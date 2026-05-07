import { coworkings } from "../data.js";

export function renderCoworkingPage() {

  const params = new URLSearchParams(window.location.search);

  const id = Number(params.get("id"));

  const coworking = coworkings.find((item) => item.id === id);

  if (!coworking) return;

  const main = document.getElementsByTagName(main);
  main.className = "main flex";
  
  renderHero(coworking);
  renderAmenities(coworking);
  renderGallery(coworking);
}

function renderHero(coworking) {
    document.querySelector(".title").textContent = coworking.title;
}

function renderAmenities(coworking) {

}

function renderGallery(coworking) {
  
}
