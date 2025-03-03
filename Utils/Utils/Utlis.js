"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = exports.Answers = exports.CurrentUser = exports.User = void 0;
class User {
    constructor(username = " ") {
        this.username = username;
    }
    getUsername() {
        return this.username;
    }
    setUsername(username) {
        this.username = username;
    }
}
exports.User = User;
class CurrentUser {
    constructor(user = new User(), password = " ") {
        this.user = user;
        this.password = password;
    }
    getUser() {
        return this.user;
    }
    getPassword() {
        return this.password;
    }
    setUser(user) {
        this.user = user;
    }
    setPassword(password) {
        this.password = password;
    }
}
exports.CurrentUser = CurrentUser;
class Answers {
    constructor(user = new User(), content = " ", isLiked = false, likecounts = 0) {
        this.user = user;
        this.content = content;
        this.likecounts = likecounts;
        this.isLiked = isLiked;
    }
    ;
    getUser() {
        return this.user;
    }
    setUser(user) {
        this.user = user;
    }
    getContent() {
        return this.content;
    }
    setContent(content) {
        this.content = content;
    }
    getIsLiked() {
        return this.isLiked;
    }
    setIsLiked(isLiked) {
        this.isLiked = isLiked;
    }
    getLikeCount() {
        return this.likecounts;
    }
    setLikeCount(likeCount) {
        this.likecounts = likeCount;
    }
}
exports.Answers = Answers;
class Question {
    constructor(user = new User(), content = " ", answers = [], isLiked = false, likeCount = 0) {
        this.user = user;
        this.content = content;
        this.answers = answers;
        this.likeCount = likeCount;
        this.isLiked = isLiked;
    }
    getUser() {
        return this.user;
    }
    setUser(user) {
        this.user = user;
    }
    getContent() {
        return this.content;
    }
    setContent(content) {
        this.content = content;
    }
    getAnswers() {
        return this.answers;
    }
    setAnswers(answers) {
        this.answers = answers;
    }
    addAnswer(answer) {
        this.answers.push(answer);
    }
    getLikeCount() {
        return this.likeCount;
    }
    setLikeCount(likeCount) {
        this.likeCount = likeCount;
    }
}
exports.Question = Question;
