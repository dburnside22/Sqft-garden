const plantNameContainer = document.querySelector(".plantName");
const refreshButton = document.querySelector(".refresh");

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
  hideCalendarView();
}

function updatePlantLabel(plantName) {
  plantNameContainer.innerHTML = plantName;
}

function resetPlantLabel() {
  plantNameContainer.innerHTML = "";
}

function toggleResetActive() {
    if (refreshButton.classList.contains("is-active")) {
      refreshButton.classList.remove("is-active");
    } else {
      refreshButton.classList.add("is-active");
    }
  }