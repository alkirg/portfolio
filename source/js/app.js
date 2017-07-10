import preloader from './modules/preloader';
import menu from "./modules/menu.js";
import flip from "./modules/flip.js";
import validate from "./modules/validate.js";

$(document).ready(function () {
    preloader();
    menu();
    flip();
    validate();
});