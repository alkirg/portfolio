import "./jquery.flip.min.js";
const link = $('.header__login_button');
const userInfo = $('.user-info');
const loginForm = $('.login-form');
let flip = $('.flip');

const run = () => {
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
}

export default run;