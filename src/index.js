import "./styles/style.css";

import { homePage } from "./scripts/main.js";
import { menuPizza } from "./scripts/menu.js";

function main(){

    homePage();

    const homeButton = document.querySelector(".home-nav");
    const menuButton = document.querySelector(".menu-nav");

    homeButton.addEventListener("click", homePage);
    menuButton.addEventListener("click", menuPizza);
}

main();