import { getAllPlantData } from "./services/firebaseService.js";

let plantData = [];
const adminView = document.querySelector(".admin-view");

const plantingMonthData = [
	{"icon": "house", "plantingType": "houseMonths"},
	{"icon": "plant", "plantingType": "transplantMonths"},
	{"icon": "seed", "plantingType": "seedMonths"},

];

const monthButtonLabels = [
	"janunary",
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

function toggleMonth(plantData, month, icon) {
	// I now have a all the info I would need to update the record in firebase
	console.log(plantData, month, icon);
}

function createIcon(icon) {
	let iconRow = document.createElement("div");
	iconRow.classList.add("admin-view-row");
	let iconImage = document.createElement("img");
	iconImage.src = `./pngs/${icon}.png`;
	iconRow.appendChild(iconImage);
	return iconRow;
}

function createMonthButtonLabels(plantInfo, icon){
	let calendarButtons = document.createElement("div");
		monthButtonLabels.forEach((month) => {
			let monthButton = document.createElement("button");
			monthButton.innerHTML = `${month.substring(0,3)}`;
			monthButton.addEventListener("click", function () {
				toggleMonth(plantInfo, month, icon);
			});
			calendarButtons.appendChild(monthButton);
		});
	return calendarButtons;
}

function createAdminRecord(plantInfo) {
	let adminRecordContainer = document.createElement("div");
	let recordTitle = document.createElement("h2");
	recordTitle.innerHTML = plantInfo.plantName;
	adminRecordContainer.appendChild(recordTitle);

	plantingMonthData.forEach((data) => {
		let iconRow = createIcon(data.icon);
		let calendarButtons = createMonthButtonLabels(plantInfo, data.icon);
		iconRow.appendChild(calendarButtons);
		adminRecordContainer.appendChild(iconRow);
	});

	adminView.appendChild(adminRecordContainer);
}

function generatePlantAdminView(plantData) {
	plantData.forEach((plant) => {
		createAdminRecord(plant);
	});
}

async function getInitialPlantData() {
	await getAllPlantData()
		.then((response) => {
			response.forEach((plant) => {
				plantData.push(plant)
			});
		});
	generatePlantAdminView(plantData);
}

getInitialPlantData();
