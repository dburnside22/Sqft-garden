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

// add a row with plant name, and lines for all three categories, with boxes for each month
// each box should toggle the month and update the database

// Get the plant data

// Populate rows
// get plantingMonthsByCategory
//
async function getInitialPlantData() {
  await fetch("refereneces/squareFootGardenData.json")
    .then((response) => response.json())
    .then((data) => plantData.push(...data["plantsAndSpaceing"]));

  console.log("plantData", plantData);
}

getInitialPlantData();
