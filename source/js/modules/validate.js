const form = $('.login-form');
const input = form.find('.login-form__input');
const checkRobot1 = form.find('#checkbox');
const checkRobot2 = form.find('#radio1');
const popup = $('.popup');
let showError = false;

const showPopup = (message) => {
    popup.find('.popup__message').text(message);
    popup.removeClass('popup_hidden');
    $('.popup__close').click(function () {
       popup.addClass('popup_hidden');
    });
};
const checkInputs = () => {
    input.each(function () {
        if ($(this).val() == '') {
            showPopup('Введите логин и пароль');
            showError = true;
            return false;
        }
    });
};
const checkRobot = () => {
    if (!(checkRobot1.prop('checked') && checkRobot2.prop('checked'))) {
        showPopup('Роботам у нас не рады');
        showError = true;
    }
};
const validate = () => {
    checkInputs();
    if (!showError)
        checkRobot();
    if (!showError)
        showPopup('Успешный вход');
};

const run = () => {
    $('.login-form__button--submit').on('click', function(e) {
        e.preventDefault();
        showError = false;
        validate();
    });
};

export default run;