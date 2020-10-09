let isMenuOpen = false;
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const monthLabelContainer = document.querySelector(".month-labels");
let menuLabel = 0;


function toggleMenu(){
    if (isMenuOpen){
       // closeMenu();
        menuButton.classList.remove("is-active");
        menu.classList.remove("is-active");
    } else {
        //openMenu();
        menuButton.classList.add("is-active");
        menu.classList.add("is-active");
    }
    isMenuOpen = !isMenuOpen;
}

function createMenuElement(monthName) {
    let label = document.createElement("p");
    label.classList.add('menu-label');
    label.innerHTML = monthName;
    return label;
}

function addMonthLabel(monthName){
    const newMonthLabel = createMenuElement(monthName);
    if (menuLabel > 0) {
        monthLabelContainer.removeChild(monthLabelContainer.lastElementChild);
        menuLabel--;
    }
    monthLabelContainer.appendChild(newMonthLabel);
    menuLabel++;
}

function resetMonthLabel(){
    if (monthLabelContainer.lastElementChild){
        monthLabelContainer.removeChild(monthLabelContainer.lastElementChild);
        menuLabel--;
    }
}