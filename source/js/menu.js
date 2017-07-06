$(document).ready(function () {
    var menuIcon = $('.hamburger-menu__icon');
    var menuWrapper = $('.hamburger-menu__menu');
    var menu = menuWrapper.children('.menu');

    menuIcon.click(function () {
        menuWrapper.show();
    });
});