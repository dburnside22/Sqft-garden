let seedCount = 0;
const seedContainer = document.querySelector('.square-container');
const seedContainerClassNames = ['fourSeeds', 'nineSeeds', 'sixteenSeeds']

function createSeedElement() {
    let seed = document.createElement("div");
    seed.classList.add('seed');
    return seed;
}

function addSeed(){
    const seed = createSeedElement();
    seedContainer.appendChild(seed);
    seedCount++;
}

function removeSeed(){
    if (seedCount > 0){
        seedContainer.removeChild(seedContainer.lastElementChild);
        seedCount--;
    }
}

function addAndRemoveClassNames(seedNumberToDisplay){
    seedContainerClassNames.forEach(name => {
        if(seedContainer.classList.contains(name)){
            console.log(name);
            seedContainer.classList.remove(name);
        }
    });
    if (seedNumberToDisplay === 4) seedContainer.classList.add('fourSeeds'); 
    if (seedNumberToDisplay === 9) seedContainer.classList.add('nineSeeds'); 
    if (seedNumberToDisplay === 16) seedContainer.classList.add('sixteenSeeds'); 
}


function updateSeedDisplay(seedNumberToDisplay){
    if(seedNumberToDisplay >= 0){
        if (seedNumberToDisplay != seedCount) {
            addAndRemoveClassNames(seedNumberToDisplay)
        }    
        while(seedNumberToDisplay != (seedCount)){
            seedNumberToDisplay - seedCount > 0 ? addSeed() : removeSeed();
        }  
    }
}
