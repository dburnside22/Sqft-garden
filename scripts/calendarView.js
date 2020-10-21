const calendarViewContainer = document.querySelector(".calendar-display");
let calendarViewDisplaying = false;

function toggleCalendarViewDisplaying(){
    (!calendarViewDisplaying) ? showCalendarView() : hideCalendarView();
    calendarViewDisplaying = !calendarViewDisplaying;
}

function hideCalendarView() {
    calendarViewContainer.style.display = 'none';
    calendarViewDisplaying = false;
}

function showCalendarView() {
    calendarViewContainer.style.display = 'block';
    calendarViewDisplaying = true;
}


// Get the months I can transplant a plant into the ground an ddisplay that in the ui all in the same 
// row so I am going to have to make divs that dont change
// and show and hide the icons?

function updateIcons(plant){
    updateTransplantIcons(plant);
}

function updateTransplantIcons(plant){
    // get all the data-icons={month}
    // add the Transplant icon to them
    // or unhide them?
    const months = getTransplantMonths(plant);
    months.forEach(month => {
        const monthSelector = document.querySelector([`[data-icons=${month}]`]);
        console.log(month, monthSelector);
        monthSelector.innerHTML = "X";
    });

}






function getTransplantMonths(plant){
    return plant.transplantMonths;
}

function getSeedMonths(plant){

}

function getPlantIndoorMonths(plant){}