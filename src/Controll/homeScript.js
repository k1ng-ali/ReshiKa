import {User, CurrentUser, Answers, Question} from "../exportedJs/Utils/Utlis.js";
const questions = [];
const currentUser = new CurrentUser();
let contentContainer;
let createBtn;
let createHeader;
let inputQuestion;
let publishBtn;
let inputQuestionTitle;

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const user = new User();
    user.setUsername(urlParams.get("username"));
    currentUser.setUser(user);
    const userName = document.getElementById("user-name");
    userName.innerText = currentUser.getUser().getUsername();
    contentContainer = document.getElementById('content-container');
    createBtn = document.getElementById('create-content-button');
    createHeader = document.getElementById('create-content-header');
    inputQuestion = document.getElementById('input-question');
    publishBtn = document.getElementById('publish-button');
    inputQuestionTitle = document.getElementById('input-question-title');

    let LastScrollTop = 0;
    const SecondHeader = document.getElementById("secondHeader");



    window.addEventListener("scroll", function() {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > LastScrollTop) {
            SecondHeader.classList.add("hidden");
        }else {
            SecondHeader.classList.remove("hidden");
        }
        LastScrollTop = scrollTop;
    })


    createBtn.addEventListener("click", function() {
        createHeader.style="display:flex";
        inputQuestion.value = "";
        inputQuestionTitle.value = "";
    })

    publishBtn.addEventListener("click", function() {
        if (inputQuestion.value.length > 30 && inputQuestionTitle.value.length > 15) {
            let newQuestion = new Question();
            newQuestion.setUser(currentUser.getUser());
            newQuestion.setTitle(inputQuestionTitle.value);
            newQuestion.setContent(inputQuestion.value);
            const now = new Date();
            const timeOnly = now.toLocaleTimeString();
            newQuestion.setTime(timeOnly)
            questions.unshift(newQuestion);
            updateContent(contentContainer);
            createHeader.style="display:none";
        }
    })

    function updateContent (container) {
        container.innerHTML = '';
        for (let i=0; i<questions.length; i++){
            container.innerHTML += `
            <div class="content">
                <h3 class="task-title">${questions[i].getTitle()}</h3>
                <div class="task-user">
                    <p class="user-task">${questions[i].getUser().getUsername()}</p>
                    <p class="data-task">${questions[i].getTime()}</p>
                </div>
                <p class="task">${questions[i].getContent()}</p>
                <nav class="task-info">
                    <p class="like-count">${questions[i].getLikeCount()} likes</p>
                    <p class="answers">${questions[i].getAnswers().length} answers</p>
                </nav>
            </div>
            `
        container.innerHTML += `
          <div class="content">
                <h3 class="task-title">Разработка REST API</h3>
                <div class="task-user">
                    <p class="user-task"> user_12 </p>
                    <p class="data-task"> 5 min ago </p>
                </div>
                <p class="task"> Как создать REST API для веб-приложения? Какие инструменты и технологии лучше использовать?</p>
                <nav class="task-info">
                    <p class="task-data">109 views</p>
                    <li class="answers">answers</li>
                </nav>
            </div>
            <div class="content">
                <h3 class="task-title">Оптимизация сортировки</h3>
                <div class="task-user">
                    <p class="user-task"> user_6 </p>
                    <p class="data-task"> 21.12.24 </p>
                </div>
                <p class="task"> Какой алгоритм сортировки лучше использовать для обработки больших массивов данных?</p>
                <nav class="task-info">
                    <p class="task-data">25 views</p>
                    <li class="answers">answers</li>
                </nav>
            </div>
            <div class="content">
                <h3 class="task-title">Лучшие практики безопасности</h3>
                <div class="task-user">
                    <p class="user-task"> user_2 </p>
                    <p class="data-task"> 5 days ago </p>
                </div>
                <p class="task">  Как защитить веб-приложение от атак SQL-инъекций и XSS?</p>
                <nav class="task-info">
                    <p class="task-data">32k views</p>
                    <li class="answers">answers</li>
                </nav>
            </div>
            <div class="content">
                <h3 class="task-title"> React vs Vue</h3>
                <div class="task-user">
                    <p class="user-task"> user_46 </p>
                    <p class="data-task"> 13.01.25 </p>
                </div>
                <p class="task">   Какие плюсы и минусы у React и Vue? Какой фреймворк выбрать для нового проекта?</p>
                <nav class="task-info">
                    <p class="task-data">97 views</p>
                    <li class="answers">answers</li>
                </nav>
            </div>
            <div class="content">
                <h3 class="task-title">Написание Telegram-бота</h3>
                <div class="task-user">
                    <p class="user-task"> user_1 </p>
                    <p class="data-task"> 9 hours ago </p>
                </div>
                <p class="task">  Как создать Telegram-бота на Python с использованием библиотеки aiogram?</p>
                <nav class="task-info">
                    <p class="task-data">24 views</p>
                    <li class="answers">answers</li>
                </nav>
            </div>
            `
        }
    }
})
