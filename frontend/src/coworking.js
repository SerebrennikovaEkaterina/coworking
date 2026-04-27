import "./style.css";
import { coworkings } from "./data.js";

// get ID from URL

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const coworking = coworkings.find(item => item.id === Number(id));
document.querySelector(".title").text = coworking.title;