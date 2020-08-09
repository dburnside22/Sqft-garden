let seedCount = 0;


function createSeedElement() {
    let seed = document.createElement("div");
    seed.classList.add('seed');
    return seed;
}

function addSeed(){
    const seedContainer = document.querySelector('.square-container');
    const seed = createSeedElement();
    seedContainer.appendChild(seed);
    seedCount++;
}

function removeSeed(){
    if (seedCount > 0){
        const seedContainer = document.querySelector('.square-container');
        seedContainer.removeChild(seedContainer.lastElementChild);
        seedCount--;
    }
}



function toggleSeedView(number){
    console.log(number);
    const seedCountContainer = document.querySelector(`div[data-seedCount="${number}"]`)
    seedCountContainer.style.display = "grid";
}
