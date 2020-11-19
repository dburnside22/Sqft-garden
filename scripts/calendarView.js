const calendarViewContainer = document.querySelector(".calendar-display");
let calendarViewDisplaying = false;
let showingTransplantIcons = [];
let showingPlantIcons = [];
let showingHouseIcons = [];

function toggleCalendarViewDisplaying() {
	!calendarViewDisplaying ? showCalendarView() : hideCalendarView();
	calendarViewDisplaying = !calendarViewDisplaying;
}

function hideCalendarView() {
	calendarViewContainer.style.display = "none";
	calendarViewDisplaying = false;
}

function showCalendarView() {
	calendarViewContainer.style.display = "block";
	calendarViewDisplaying = true;
}

// Get the months I can transplant a plant into the ground an ddisplay that in the ui all in the same
// row so I am going to have to make divs that dont change
// and show and hide the icons?

function populateIcons(plant) {
	updateTransplantIcons(plant);
	getSeedMonths(plant);
	getPlantIndoorMonths(plant);
}

function updateTransplantIcons(plant) {
	const months = plant.transplantMonths;
	if (showingTransplantIcons == months) return;
	if (showingTransplantIcons.length > 0) clearIcons(3);
	months.forEach((month) => {
		const iconSelector = document.querySelector([
			`[data-icons=${month}]>img:nth-child(3)`,
		]);
		if (!showingTransplantIcons.includes(month)) {
			iconSelector.classList.remove("hide");
		}
	});
	showingTransplantIcons = months;
}

function getSeedMonths(plant) {
	const months = plant.seedMonths;
	if (showingPlantIcons == months) return;
	if (showingPlantIcons.length > 0) clearIcons(2);
	months.forEach((month) => {
		const iconSelector = document.querySelector([
			`[data-icons=${month}]>img:nth-child(2)`,
		]);
		if (!showingPlantIcons.includes(month)) {
			iconSelector.classList.remove("hide");
		}
	});
	showingPlantIcons = months;
}

function getPlantIndoorMonths(plant) {
	const months = plant.houseMonths;
	if (showingHouseIcons === months) return;
	if (showingHouseIcons.length > 0) clearIcons(1);
	months.forEach((month) => {
		const iconSelector = document.querySelector([
			`[data-icons=${month}]>img:nth-child(1)`,
		]);
		if (!showingHouseIcons.includes(month)) {
			iconSelector.classList.remove("hide");
		}
	});
	showingHouseIcons = months;
}

function clearIcons(iconOrder) {
	allTheIcons = document.querySelectorAll([
		`[data-icons]>img:nth-child(${iconOrder})`,
	]);
	allTheIcons.forEach((icon) => {
		if (!icon.classList.contains("hide")) icon.classList.add("hide");
	});
}
