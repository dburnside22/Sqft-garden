import { getAllPlantData } from "./services/firebaseService.js";

let plantData = [];
const adminView = document.querySelector(".admin-view");

const icons = ["house", "plant", "seed"];

const monthButtonLabels = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

function toggleMonth(plantData, month, icon) {
	// I now have a all the info I would need to update the record in firebase
	console.log(plantData, month, icon);
}

function createAdminRecord(plantInfo) {
	let adminRecordContainer = document.createElement("div");
	let recordTitle = document.createElement("h2");
	recordTitle.innerHTML = plantInfo.plantName;
	adminRecordContainer.appendChild(recordTitle);

	icons.forEach((icon) => {
		let iconRow = document.createElement("div");
		iconRow.classList.add("admin-view-row");
		let iconImage = document.createElement("img");
		iconImage.src = `./pngs/${icon}.png`;
		iconRow.appendChild(iconImage);
		let calendarButtons = document.createElement("div");
		monthButtonLabels.forEach((month) => {
			let monthButton = document.createElement("button");
			monthButton.innerHTML = `${month}`;
			monthButton.addEventListener("click", function () {
				toggleMonth(plantInfo, month, icon);
			});
			calendarButtons.appendChild(monthButton);
		});
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
