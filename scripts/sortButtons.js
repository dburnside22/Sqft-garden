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