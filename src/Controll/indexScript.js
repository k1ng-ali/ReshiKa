localStorage.setItem("Bot", "6931335165:AAHJ9XYgCBUUqjTti5fQZxRiMkdRCR_tqeg");

const login_btn = document.getElementById("login-btn");
const register_btn = document.getElementById("register-btn");
const username = document.getElementById("username");
const password = document.getElementById("password");
const repeat_pass = document.getElementById("repeat-password");
const repeat_pass_label = document.getElementById("repeat-password-label");
const rpt_pass_title = document.getElementById("repeat-pass-title");
const form_title = document.getElementById("form-title");
const log_sign_btn = document.getElementById("log-sign-btn");
const lgn_with_tg = document.getElementById("sign-with_tg-btn");
const Bot = localStorage.getItem("Bot");

let LastUpdate = 0;

login_btn.addEventListener('click', () => {
    login_btn.classList.add('active-btn');
    login_btn.classList.remove('non-active-btn');

    register_btn.classList.add('non-active-btn');
    register_btn.classList.remove('active-btn');
    console.log("cliced login");

    repeat_pass_label.style.display = "none";
    rpt_pass_title.style.display = "none";
    form_title.innerText = "Welcome back";
    log_sign_btn.innerText = "LogIn";
    lgn_with_tg.innerText = "LogIn with telegram"
})

register_btn.addEventListener('click', () => {
    login_btn.classList.remove('active-btn');
    login_btn.classList.add('non-active-btn');

    register_btn.classList.add('active-btn');
    register_btn.classList.remove('non-active-btn');
    console.log("cliced register");

    repeat_pass_label.style.display = "flex";
    rpt_pass_title.style.display = "flex";
    form_title.innerText = "Create an account";
    log_sign_btn.innerText = "SignUp";
    lgn_with_tg.innerText = "Sign with telegram";
})

log_sign_btn.addEventListener('click', () => {
    if (login_btn.classList.contains('active-btn')) {
        if (username.value !== "" && password.value !== "") {
            const url = new URL(window.location.href);
            url.pathname = '/ReshiKa/src/View/home.html';
            url.searchParams.set('username', username.value);

            window.location.href = url.toString();
        }
    }
    else {
        if (username.value !== "" && password.value !== "" && repeat_pass.value !== "") {
            if (password.value === repeat_pass.value) {
                const url = new URL(window.location.href);
                url.pathname = '/ReshiKa/src/View/home.html';
                url.searchParams.set('username', username.value);

                window.location.href = url.toString();
            }
        }
    }
})

lgn_with_tg.addEventListener('click', () => {
    let token = generateToken(16);
    window.open("https://t.me/koe_shto_zaydi_bot?start="+token, '_blank')

    getTgUpdate(token);
})

function generateToken(length) {
    const array = new Uint8Array(length);
    window.crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('').slice(0, length);
}

async function getTgUpdate(token) {
    let isTokenMatched = false;

    while (!isTokenMatched) {
        const url = `https://api.telegram.org/bot${Bot}/getUpdates?offset=${LastUpdate + 1}`;
        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.ok) {
                for (let update of data.result) {
                    LastUpdate = update.update_id;

                    if (update.message && update.message.text && update.message.text.includes(token)) {
                        let userId = update.message.from.id;
                        let userName = update.message.from.first_name;


                        const url = new URL(window.location.href);
                        url.pathname = '/ReshiKa/src/View/home.html';
                        url.searchParams.set('username', userName);
                        url.searchParams.set('user_id', userId);
                        window.location.href = url.toString();

                        isTokenMatched = true;
                        break;
                    }
                }
            }
        } catch (error) {
            console.error("Ошибка при получении обновлений:", error);
        }

        await new Promise(resolve => setTimeout(resolve, 500));
    }
}

