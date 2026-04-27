import { arrowIcon } from "/src/icons.js";
import { itineraryIcon } from "/src/icons.js";


export function createCoworkingCard(coworking) {
  const card = document.createElement("li");
  card.className = "list-item card";

  const info1 = document.createElement("div");
  info1.className = "coworking-info-1 flex";

  const info2 = document.createElement("div");
  info2.className = "coworking-info-2 flex";

  const primaryBtn = document.createElement("button");
  primaryBtn.className = "primary-button btn-text";
  primaryBtn.textContent = "посетить";

  card.append(info1, info2, primaryBtn);

  const h3Title = document.createElement("h3");
  h3Title.className = "h3-title";
  h3Title.textContent = coworking.title;

  const address = document.createElement("p");
  address.className = "card__adress";
  address.textContent = coworking.address;

  const price = document.createElement("p");
  price.className = "card__price";
  price.textContent = coworking.price;

  const coworkingLink = document.createElement("a");
  coworkingLink.className = "card__link flex btn-text";
  coworkingLink.href = `./coworking.html?id=${coworking.id}`;

  coworkingLink.innerHTML = `подробнее
  ${arrowIcon}
`;

  info1.append(h3Title, address, price, coworkingLink);

  const indicator = document.createElement("div");
  indicator.className = "indicator";

  const percent = parseFloat(coworking.loadPercent);

  indicator.style.setProperty("--progress", percent);

  const loadPercentEl = document.createElement("div");
  loadPercentEl.className = "indicator__percent-text flex";
  loadPercentEl.textContent = percent + "%";

  indicator.append(loadPercentEl);
  info2.append(indicator);

  requestAnimationFrame(() => {
    indicator.classList.add("is-animated");
  });

  const btnItinerary = document.createElement("button");
  btnItinerary.className = "button itinerary flex";

  btnItinerary.innerHTML = `
  ${itineraryIcon}
`;

  const btnItineraryTxt = document.createElement("span");
  btnItineraryTxt.className = "btn-text itinerary__btn";
  btnItineraryTxt.textContent = "маршрут";
  btnItinerary.append(btnItineraryTxt);

  info2.append(btnItinerary);

  return card;
}