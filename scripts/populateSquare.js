let seedCount = 0;
const seedContainer = document.querySelector(".square-container");
const seedContainerClassNames = ["fourSeeds", "nineSeeds", "sixteenSeeds"];
const additionalSquaresNeeded = document.querySelector(
	".additionalSquaresNeeded"
);
let showingAdditionalSquaresNote = false;

function createSeedElement() {
	let seed = document.createElement("div");
	seed.classList.add("seed");
	return seed;
}

function addSeed() {
	const seed = createSeedElement();
	seedContainer.appendChild(seed);
	seedCount++;
}

function removeSeed() {
	if (seedCount > 0) {
		seedContainer.removeChild(seedContainer.lastElementChild);
		seedCount--;
	}
}

function removeAllSeeds() {
	while (seedCount > 0) {
		seedContainer.removeChild(seedContainer.lastElementChild);
		seedCount--;
	}
}

function manageSquareClassNames(seedNumberToDisplay) {
	console.log("called this");
	seedContainerClassNames.forEach((name) => {
		if (seedContainer.classList.contains(name)) {
			seedContainer.classList.remove(name);
		}
	});
	if (seedNumberToDisplay == 4) seedContainer.classList.add("fourSeeds");
	if (seedNumberToDisplay == 9) {
		console.log("nine");
		seedContainer.classList.add("nineSeeds");
	}
	if (seedNumberToDisplay == 16) seedContainer.classList.add("sixteenSeeds");
}

function updateSeedDisplay(seedNumberToDisplay) {
	console.log("called", seedNumberToDisplay);

	if (seedNumberToDisplay >= 0 && seedNumberToDisplay !== 100) {
		if (seedNumberToDisplay != seedCount) {
			manageSquareClassNames(seedNumberToDisplay);
		}
		while (seedNumberToDisplay != seedCount) {
			seedNumberToDisplay - seedCount > 0 ? addSeed() : removeSeed();
		}
	} else if (seedNumberToDisplay === 100) {
		removeAllSeeds();
		addSeed();
		manageSquareClassNames(1);
		toggleAdditionalSpaceNote();
	}
}

function toggleAdditionalSpaceNote() {
	if (!showingAdditionalSquaresNote) {
		additionalSquaresNeeded.innerHTML =
			"Additional Squares are need for this plant";
		showingAdditionalSquaresNote = true;
	} else {
		additionalSquaresNeeded.innerHTML = "";
		showingAdditionalSquaresNote = false;
	}
}
