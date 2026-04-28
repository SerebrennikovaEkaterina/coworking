import "./style.css";

import { coworkings } from "./data.js";

// get ID from URL

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

console.log(id);

const coworking = coworkings.find((item) => item.id === Number(id));

console.log(coworking);

document.querySelector(".title").textContent = coworking.title;
