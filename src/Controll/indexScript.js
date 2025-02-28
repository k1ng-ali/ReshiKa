
const login_btn = document.getElementById("login-btn");
const register_btn = document.getElementById("register-btn");
const username = document.getElementById("username");
const password = document.getElementById("password");
const repeat_pass = document.getElementById("repeat-password");
const repeat_pass_label = document.getElementById("repeat-password-label");
const rpt_pass_title = document.getElementById("repeat-pass-title");
const form_title = document.getElementById("form-title");
const log_sign_btn = document.getElementById("log-sign-btn");

login_btn.addEventListener('click', e => {
    login_btn.classList.add('active-btn');
    login_btn.classList.remove('non-active-btn');

    register_btn.classList.add('non-active-btn');
    register_btn.classList.remove('active-btn');
    console.log("cliced login");

    repeat_pass_label.style.display = "none";
    rpt_pass_title.style.display = "none";
    form_title.innerText = "Welcome back";
    log_sign_btn.innerText = "LogIn";
})

register_btn.addEventListener('click', e => {
    login_btn.classList.remove('active-btn');
    login_btn.classList.add('non-active-btn');

    register_btn.classList.add('active-btn');
    register_btn.classList.remove('non-active-btn');
    console.log("cliced register");

    repeat_pass_label.style.display = "flex";
    rpt_pass_title.style.display = "flex";
    form_title.innerText = "Create an account";
    log_sign_btn.innerText = "SignUp";
})

log_sign_btn.addEventListener('click', e => {
    if (login_btn.classList.contains('active-btn')) {
        if (username.value != "" && password.value != "") {
            const url = new URL(window.location.href);
            url.pathname = '/ReshiKa/src/View/home.html';
            url.searchParams.set('username', username.value);

            window.location.href = url.toString();
        }
    }
    else {
        if (username.value != "" && password.value != "" && repeat_pass.value != "") {
            if (password.value == repeat_pass.value) {
                const url = new URL(window.location.href);
                url.pathname = '/ReshiKa/src/View/home.html';
                url.searchParams.set('username', username.value);

                window.location.href = url.toString();
            }
        }
    }
})