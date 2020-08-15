const plantsAndSpaceing = []
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

async function populateButtons() {
    await fetch("./squareFootGardenData.json")
            .then(response => response.json())
            .then(data => plantsAndSpaceing.push(...data["plantsAndSpaceing"]))
    plantsAndSpaceing.forEach(plant => {
        addButton(plant)
    });
}    

populateButtons();