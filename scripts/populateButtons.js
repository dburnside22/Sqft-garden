import { getAllPlantData } from "./services/firebaseService.js";
import { scrollToTopOfPage, updatePlantLabel } from "./utilities.js";

export let plantsAndSpaceing = [];
const buttonContainer = document.querySelector(".buttons-container");
const searchBarInput = document.querySelector(".search-bar-input");
let currentButtonsDisplayed;

function buttonFunction(spacing, plantName, plant) {
	clearSearchBar();
	scrollToTopOfPage();
	updateSeedDisplay(spacing);
	updatePlantLabel(plantName);
	clearButtons();
	toggleCalendarViewDisplaying();
	populateIcons(plant);
}

function createButtonElement(plant) {
	let button = document.createElement("button");
	button.classList.add("plant-button");
	button.innerHTML = plant.plantName;
	button.addEventListener("click", function () {
		buttonFunction(plant.spacing, plant.plantName, plant);
	});
	return button;
}

function addButton(plant) {
	let button = createButtonElement(plant);
	buttonContainer.appendChild(button);
}

export function populateButtons(buttons) {
	if (currentButtonsDisplayed === buttons) return;
	currentButtonsDisplayed = buttons;
	buttonContainer.innerHTML = "";
	buttons.forEach((button) => {
		addButton(button);
	});
}

function filterButtons() {
	const searchingString = String(this.value).toLowerCase();
	if (searchingString === "") return;

	const newPlantList = plantsAndSpaceing.filter((record) => {
		if (record.plantName.includes(searchingString)) {
			return record;
		}
	});
	resetPlantLabel();
	updateSeedDisplay(0);
	populateButtons(newPlantList);
}

async function init() {
	await getAllPlantData().then((response) => {
		response.forEach((plant) => {
			plantsAndSpaceing.push(plant);
		});
	});
	populateButtons(plantsAndSpaceing);
	searchBarInput.addEventListener("keyup", filterButtons);
}

function clearButtons() {
	currentButtonsDisplayed = [];
	buttonContainer.innerHTML = "";
}

export function clearSearchBar() {
	searchBarInput.value = "";
}

init();
