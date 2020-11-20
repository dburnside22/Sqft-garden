import {
	clearSearchBar,
	populateButtons,
	plantsAndSpaceing,
} from "./populateButtons.js";

import { resetPlantLabel } from "./utilities.js";

const calendarButtons = document.querySelectorAll(".menu > button");

function sortButtonsBySeedCount(seedCount) {
	updateSeedDisplay(seedCount);
	const newPlantList = plantsAndSpaceing.filter((record) => {
		return record.spacing === seedCount;
	});
	populateButtons(newPlantList);
}

function sortByMonth(month) {
	updateSeedDisplay(0);
	const newPlantList = plantsAndSpaceing.filter((record) => {
		if (
			record.seedMonths.includes(month) ||
			record.transplantMonths.includes(month)
		) {
			return record;
		}
	});
	toggleMenu();
	populateButtons(newPlantList);
	clearSearchBar();
	resetPlantLabel();
	addMonthLabel(month);
}

function setupCalendarFunctions() {
	const monthButtonLabels = [
		"january",
		"feburary",
		"march",
		"april",
		"may",
		"june",
		"july",
		"august",
		"september",
		"october",
		"november",
		"december",
	];
	calendarButtons.forEach((button, index) => {
		button.addEventListener("click", () =>
			sortByMonth(monthButtonLabels[index])
		);
	});
}

setupCalendarFunctions();
