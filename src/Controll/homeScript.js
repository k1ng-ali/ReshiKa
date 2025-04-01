import {User, CurrentUser, Answers, Question} from "../exportedJs/Utils/Utlis.js";
const questions = [];
const currentUser = new CurrentUser();
let contentContainer;
let createBtn;
let createHeader;
let inputQuestion;
let publishBtn;
let inputQuestionTitle;
let crtContentClose;
let PrimaryContent;

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
    crtContentClose = document.getElementById('crt-content-close');
    PrimaryContent = document.getElementById('primary-content-1');

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

    PrimaryContent.addEventListener("click", function() {
        PrimaryContent.innerHTML += `
            <div class="answers">
                <div class="answer">
                    <div class="task-user">
                        <p class="user-task usr2">user 1</p>
                        <p class="data-task">3 min ago</p>
                    </div>
                    <p class="task">the answer to question</p>
                    <nav class="task-info">
                        <p class="task-data">43 likes</p>
                    </nav>
                </div>
                <div class="answer">
                    <div class="task-user">
                        <p class="user-task usr3">user 2</p>
                        <p class="data-task">27 min ago</p>
                    </div>
                    <p class="task">Second answer to question</p>
                    <nav class="task-info">
                        <p class="task-data">4 likes</p>
                    </nav>
                </div>
            </div>
            `
    })

    function toggleElement (ContainerSelector, elementClass) {
        let containerElement = document.querySelector(ContainerSelector);
        let element = containerElement.querySelector(`.${elementClass}`);

        if (element) {
            element.remove();
        }
        else {
            ContainerSelector.innerHTML += `
            <div class="answers">
                <div class="answer">
                    <div class="task-user">
                        <p class="user-task usr2">user 1</p>
                        <p class="data-task">3 min ago</p>
                    </div>
                    <p class="task">the answer to question</p>
                    <nav class="task-info">
                        <p class="task-data">43 likes</p>
                    </nav>
                </div>
                <div class="answer">
                    <div class="task-user">
                        <p class="user-task usr3">user 2</p>
                        <p class="data-task">27 min ago</p>
                    </div>
                    <p class="task">Second answer to question</p>
                    <nav class="task-info">
                        <p class="task-data">4 likes</p>
                    </nav>
                </div>
            </div>
            `
        }
    }

    crtContentClose.addEventListener("click", function() {
        createHeader.style="display:none";
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
        }
    }
})