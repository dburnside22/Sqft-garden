import { addPlant } from "./services/firebaseService.js";
let allThePlants = [];

async function test() {
	await fetch("refereneces/squareFootGardenData.json")
		.then((response) => response.json())
		.then((data) => allThePlants.push(...data["plantsAndSpaceing"]));
	console.log(allThePlants);
	allThePlants.forEach((plant) => {
		addPlant(plant);
	});
	// addPlant(allThePlants[0]);
}

test();
// testing();
