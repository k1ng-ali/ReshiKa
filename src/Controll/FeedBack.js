localStorage.setItem("Bot", "6931335165:AAHJ9XYgCBUUqjTti5fQZxRiMkdRCR_tqeg");

const messages = document.getElementById('messages');
const sendButton = document.getElementById('send-button');
const message = document.getElementById('message');
const Admin = "1653169072"

const Bot = localStorage.getItem("Bot");
const token = generateToken(16)

const username = "TestUser"
let LastUpdate = 0;

let data = {
    chat_id:Admin,
    text: message,
}

getTgUpdate()

sendButton.addEventListener('click', () => {
    sendMessage();
})

async function getTgUpdate() {
    let isTokenMatched = false;

    while (true) {
        const url = `https://api.telegram.org/bot${Bot}/getUpdates?offset=${LastUpdate + 1}`;
        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.ok) {
                for (let update of data.result) {
                    LastUpdate = update.update_id;

                    if (update.message && update.message.text) {
                        let userId = update.message.from.id;
                        let userName = update.message.from.first_name;
                        let text = update.message.text;
                        messages.innerHTML += `
                            <H3 style="color: dimgrey">'${userName}: ${text}'</H3>
                            `
                    }
                }
            }
        } catch (error) {
            console.error("Ошибка при получении обновлений:", error);
        }

        await new Promise(resolve => setTimeout(resolve, 500));
    }
}

async function sendMessage() {
    const url = `https://api.telegram.org/bot${Bot}/sendMessage`;
    if (message.value !== ""){
        await fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data),
        }).then(res => res.json())
            .then(data => {
                if (data.ok) {
                    messages.innerHTML += `
                        <H3 style="color: dimgrey">"You:" + text</H3>
                    `
                }
            })
    }
}

function generateToken(length) {
    const array = new Uint8Array(length);
    window.crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('').slice(0, length);
}