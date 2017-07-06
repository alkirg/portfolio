$(document).ready(function () {
    var link = $('.header__login_button');
    var userInfo = $('.user-info');
    var loginForm = $('.login-form');
    var flip = $('.flip');

    flip.flip({
        front: '.user-info',
        back: '.login-form',
        trigger: 'manual',
        autoSize: false
    });

    loginForm.addClass('flip_hidden');

    link.click(function (e) {
        var flipModel = flip.data('flip-model');
        if (!flipModel.isFlipped) {
            userInfo.removeClass('flip_active').addClass('flip_hidden');
            loginForm.removeClass('flip_hidden').addClass('flip_active');
            flip.flip(true);
        } else {
            loginForm.removeClass('flip_active').addClass('flip_hidden');
            userInfo.removeClass('flip_hidden').addClass('flip_active');
            flip.flip(false);
        }
        e.preventDefault();
    });
});