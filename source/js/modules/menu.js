const menuIcon = $('.hamburger-menu__icon');
const menuWrapper = $('.hamburger-menu__menu');
const menu = menuWrapper.children('.menu');

const run = () => {
    menuIcon.click(function () {
        menuWrapper.show();
    });
}

export default run;