let isMenuOpen = false;
const menuButton = document.querySelector(".menu-button");

function toggleMenu(){
    if (isMenuOpen){
       // closeMenu();
        menuButton.classList.remove("is-active");
    } else {
        //openMenu();
        menuButton.classList.add("is-active");
    }
    isMenuOpen = !isMenuOpen;
}