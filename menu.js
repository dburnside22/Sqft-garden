let isMenuOpen = false;
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");


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