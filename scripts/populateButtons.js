let plantsAndSpaceing = [];
const buttonContainer = document.querySelector(".buttons-container");
let selectedButton;

function buttonFunction(spacing, plantName, buttonClicked) {
  clearSearchBar();
  updateSeedDisplay(spacing);
  updatePlantLabel(plantName);
  scrollToTopOfPage();
}

function createButtonElement(plant) {
  let button = document.createElement("button");
  button.classList.add("plant-button");
  button.innerHTML = plant.plantName;
  button.addEventListener("click", function () {
    buttonFunction(plant.spacing, plant.plantName, this);
  });
  return button;
}

function addButton(plant) {
  button = createButtonElement(plant);
  buttonContainer.appendChild(button);
}

function populateButtons(buttons) {
  buttonContainer.innerHTML = "";
  buttons.forEach((button) => {
    addButton(button);
  });
}

function filterButtons() {
  const searchingString = String(this.value).toLowerCase();
  if (searchingString === "") {
    return;
  }
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
