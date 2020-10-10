let plantsAndSpaceing = [];
const buttonContainer = document.querySelector(".buttons-container");
let currentButtonsDisplayed;

function buttonFunction(spacing, plantName) {
  clearSearchBar();
  scrollToTopOfPage();
  updateSeedDisplay(spacing);
  updatePlantLabel(plantName);
}

function createButtonElement(plant) {
  let button = document.createElement("button");
  button.classList.add("plant-button");
  button.innerHTML = plant.plantName;
  button.addEventListener("click", function () {
    buttonFunction(plant.spacing, plant.plantName);
  });
  return button;
}

function addButton(plant) {
  button = createButtonElement(plant);
  buttonContainer.appendChild(button);
}

function populateButtons(buttons) {
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

async function getInitialButtons() {
  await fetch("refereneces/squareFootGardenData.json")
    .then((response) => response.json())
    .then((data) => plantsAndSpaceing.push(...data["plantsAndSpaceing"]));
  populateButtons(plantsAndSpaceing);
}

getInitialButtons();
