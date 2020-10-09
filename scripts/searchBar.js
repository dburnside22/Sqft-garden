const searchBarInput = document.querySelector(".search-bar-input");

function clearSearchBar() {
    searchBarInput.value = "";
  }
  
  searchBarInput.addEventListener("keyup", filterButtons);