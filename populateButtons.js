let plantsAndSpaceing = []
const buttonContainer = document.querySelector(".buttons-container");

function createButtonElement(plant) {
    let button = document.createElement("button");
    button.classList.add('plant-button')
    button.innerHTML = plant.plantName;
    button.addEventListener("click",function(){
        updateSeedDisplay(plant.spacing);
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
    sortButtonsBySeedCount(1);
}  

function populateButtons(buttons){
    buttonContainer.innerHTML = "";
    buttons.forEach(button => {
        addButton(button);
    });
}

function sortButtonsBySeedCount(seedCount){
    const newPlantList = plantsAndSpaceing.filter((record) => {
        console.log(record.spacing)
        record.spacing === seedCount
    })
    
}

getInitialButtons();
