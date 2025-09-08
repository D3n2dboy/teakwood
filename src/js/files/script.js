// Подключение функционала "Чертогов Фрилансера"
//import { cli } from "webpack-dev-server";
import { isMobile, bodyUnlock, bodyLock } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";



const filterButton = document.querySelector('.panel-catalog__filter-button');
const filterBody = document.querySelector('.sidebar-filter');

const filterCloseButton = document.querySelector('.sidebar-filter__close-button');

if (filterButton) {
    filterButton.addEventListener("click", function (e) {
        document.documentElement.classList.toggle("filter-open");
        bodyLock();
    });
}

if (filterCloseButton) {
    filterCloseButton.addEventListener("click", function (e) {
        document.documentElement.classList.toggle("filter-open");
        bodyUnlock();
    });
}