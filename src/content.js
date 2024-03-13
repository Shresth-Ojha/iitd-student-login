// require('dotenv').config();

kerberos_id = '';
kerberos_pass = '';

const host = document.location.host;

if (host === 'webmail.iitd.ac.in') {
    const webmail_user = document.querySelector('#rcmloginuser');
    const webmail_pwd = document.querySelector('#rcmloginpwd');

    webmail_user.value = kerberos_id;
    webmail_pwd.value = kerberos_pass;
    document.querySelector('#rcmloginsubmit').click();
} else if (host === 'moodle.iitd.ac.in') {
    const moodle_user = document.querySelector('#username');
    const moodle_pwd = document.querySelector('#password');
    const text = document.querySelector('#login').innerText;
    const moodle_captcha_field = document.querySelector('#valuepkg3');

    moodle_user.value = kerberos_id;
    moodle_pwd.value = kerberos_pass;

    if (text.search('add') > 0) {
        const plus = text.search(' \\+');
        const num1 = parseInt(text.substring(plus - 2, plus));
        const num2 = parseInt(text.substring(plus + 3, plus + 5));

        moodle_captcha_field.value = num1 + num2;
    } else if (text.search('subtract') > 0) {
        const subtract = text.search(' \\-');
        const num1 = parseInt(text.substring(subtract - 2, subtract));
        const num2 = parseInt(text.substring(subtract + 3, subtract + 5));

        moodle_captcha_field.value = num1 - num2;
    } else if (text.search('first') > 0) {
        const comma = text.search(' ,');
        const num1 = parseInt(text.substring(comma - 2, comma));
        const num2 = parseInt(text.substring(comma + 3, comma + 5));

        moodle_captcha_field.value = num1;
    } else {
        const comma = text.search(' ,');
        const num1 = parseInt(text.substring(comma - 2, comma));
        const num2 = parseInt(text.substring(comma + 3, comma + 5));

        moodle_captcha_field.value = num2;
    }

    document.querySelector('#loginbtn').click();
} else if (host === 'oauth.iitd.ac.in') {
    document.querySelector('#username').value = kerberos_id;
    document.querySelector('#password').value = kerberos_pass;
} else if (host === 'ocs.iitd.ac.in') {
    document.querySelector('#mat-input-0').value = kerberos_id;
    document.querySelector('#mat-input-1').value = kerberos_pass;
}
