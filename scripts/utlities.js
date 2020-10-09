const plantNameContainer = document.querySelector(".plantName");

function scrollToTopOfPage() {
  window.scrollTo(0, 0);
}

function resetAll() {
  toggleResetActive();
  updateSeedDisplay(0);
  populateButtons(plantsAndSpaceing);
  resetPlantLabel();
  clearSearchBar();
  resetMonthLabel();
}

function updatePlantLabel(plantName) {
  plantNameContainer.innerHTML = plantName;
}

function resetPlantLabel() {
  plantNameContainer.innerHTML = "";
}