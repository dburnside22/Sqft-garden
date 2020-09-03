let plantsAndSpaceing = []
const buttonContainer = document.querySelector(".buttons-container");
const searchBarInput = document.querySelector(".search-bar-input");
const refreshButton = document.querySelector(".refresh");
let selectedButton;

function buttonFunction(spacing, plantName, buttonClicked){
    clearSearchBar();
    updateSeedDisplay(spacing);
    updatePlantLabel(plantName);
    toggleActive(buttonClicked)
}

function toggleActive(buttonClicked) {
    if (selectedButton === buttonClicked) {
        selectedButton.classList.remove('active');
        selectedButton = "";
        resetPlantLabel();
        updateSeedDisplay(0);
    } else {
        if (selectedButton) selectedButton.classList.remove('active');
        selectedButton = buttonClicked;
        selectedButton.classList.add('active');
    }
}

function createButtonElement(plant) {
    let button = document.createElement("button");
    button.classList.add('plant-button');
    button.innerHTML = plant.plantName;
    button.addEventListener("click", function(){
        buttonFunction(plant.spacing, plant.plantName, this);
    })
    return button;
}

function addButton(plant){
    button = createButtonElement(plant);
    buttonContainer.appendChild(button);
}

async function getInitialButtons() {
    await fetch("./squareFootGardenData.json")
            .then(response => response.json())
            .then(data => plantsAndSpaceing.push(...data["plantsAndSpaceing"]))
    populateButtons(plantsAndSpaceing);
}  

function populateButtons(buttons){
    buttonContainer.innerHTML = "";
    buttons.forEach(button => {
        addButton(button);
    });
}

function sortButtonsBySeedCount(seedCount){
    updateSeedDisplay(seedCount);
    const newPlantList = plantsAndSpaceing.filter(record => {
        return record.spacing === seedCount
    })
    populateButtons(newPlantList);
}

function sortByMonth(month){
    updateSeedDisplay(0);
    const newPlantList = plantsAndSpaceing.filter(record => {
        if (record.seedMonths.includes(month) || record.transplantMonths.includes(month)){
            return record;
        }
    });
    toggleMenu();
    populateButtons(newPlantList);
    clearSearchBar();
    resetPlantLabel();
    addMonthLabel(month);
}

function resetButtons() {
    if (refreshButton.classList.contains("is-active")){
        refreshButton.classList.remove("is-active");
    } else {
        refreshButton.classList.add("is-active");
    }
}

function resetAll() {
    toggleResetActive();
    updateSeedDisplay(0);
    populateButtons(plantsAndSpaceing);
    resetPlantLabel();
    clearSearchBar();
    resetMonthLabel();
}

function filterButtons() {
    const searchingString = String(this.value).toLowerCase();
    if (searchingString === ""){
        return; 
    }
    const newPlantList = plantsAndSpaceing.filter(record => {
        if (record.plantName.includes(searchingString)){
            return record;
        }
    });
    resetPlantLabel();
    updateSeedDisplay(0);
    populateButtons(newPlantList);
}

function clearSearchBar() {
    searchBarInput.value = "";
}

searchBarInput.addEventListener("keyup", filterButtons);

getInitialButtons();
