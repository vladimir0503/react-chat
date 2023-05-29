const validation = (values, isLogin = false) => {

    const errors = {};

    const {
        basic_email,
        basic_name,
        basic_password,
        basic_repeat_password
    } = values;

    if (!basic_email) {
        errors.email = 'Введите email';
    } else if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(basic_email)) {
        errors.email = 'Некоректный email';
    };

    if (!basic_name && !isLogin) {
        errors.name = 'Введите имя';
    };

    if (!basic_password) {
        errors.password = 'Введите пароль';
    } else if (/(?=.{10,})/.test(basic_password) && !isLogin) {
        errors.password = 'Пароль не должен быть больше 10 символов';
    };

    if (!isLogin) {
        if (!isLogin && basic_password !== basic_repeat_password) {
            errors.repeat_password = 'Пароли не совпадают';
        };
    };

    return errors;
};

export default validation;