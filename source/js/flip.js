(function () {
    var link = document.querySelectorAll('.header__login_button');

    link.addEventListener('click', function () {
        // e.preventDefault();
        $('.user-info').flip();
        return false;
    });
})();