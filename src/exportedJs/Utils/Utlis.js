var User = /** @class */ (function () {
    function User(username) {
        if (username === void 0) { username = " "; }
        this.username = username;
    }
    User.prototype.getUsername = function () {
        return this.username;
    };
    User.prototype.setUsername = function (username) {
        this.username = username;
    };
    return User;
}());
export { User };
var user = new User();
var CurrentUser = /** @class */ (function () {
    function CurrentUser(user, password) {
        if (user === void 0) { user = new User(); }
        if (password === void 0) { password = " "; }
        this.user = user;
        this.password = password;
    }
    CurrentUser.prototype.getUser = function () {
        return this.user;
    };
    CurrentUser.prototype.getPassword = function () {
        return this.password;
    };
    CurrentUser.prototype.setUser = function (user) {
        this.user = user;
    };
    CurrentUser.prototype.setPassword = function (password) {
        this.password = password;
    };
    return CurrentUser;
}());
export { CurrentUser };
var Answers = /** @class */ (function () {
    function Answers(user, title, content, isLiked, likecounts, time) {
        if (user === void 0) { user = new User(); }
        if (title === void 0) { title = " "; }
        if (content === void 0) { content = " "; }
        if (isLiked === void 0) { isLiked = false; }
        if (likecounts === void 0) { likecounts = 0; }
        if (time === void 0) { time = " "; }
        this.user = user;
        this.title = title;
        this.content = content;
        this.likecounts = likecounts;
        this.isLiked = isLiked;
        this.time = time;
    }
    ;
    Answers.prototype.getUser = function () {
        return this.user;
    };
    Answers.prototype.setUser = function (user) {
        this.user = user;
    };
    Answers.prototype.getTitle = function () {
        return this.title;
    };
    Answers.prototype.setTitle = function (title) {
        this.title = title;
    };
    Answers.prototype.getContent = function () {
        return this.content;
    };
    Answers.prototype.setContent = function (content) {
        this.content = content;
    };
    Answers.prototype.getIsLiked = function () {
        return this.isLiked;
    };
    Answers.prototype.setIsLiked = function (isLiked) {
        this.isLiked = isLiked;
    };
    Answers.prototype.getLikeCount = function () {
        return this.likecounts;
    };
    Answers.prototype.setLikeCount = function (likeCount) {
        this.likecounts = likeCount;
    };
    Answers.prototype.getTime = function () { return this.time; };
    Answers.prototype.setTime = function (time) { this.time = time; };
    return Answers;
}());
export { Answers };
var Question = /** @class */ (function () {
    function Question(user, content, title, answers, isLiked, likeCount, time) {
        if (user === void 0) { user = new User(); }
        if (content === void 0) { content = " "; }
        if (title === void 0) { title = " "; }
        if (answers === void 0) { answers = []; }
        if (isLiked === void 0) { isLiked = false; }
        if (likeCount === void 0) { likeCount = 0; }
        if (time === void 0) { time = " "; }
        this.user = user;
        this.title = title;
        this.content = content;
        this.answers = answers;
        this.likeCount = likeCount;
        this.isLiked = isLiked;
        this.time = time;
    }
    Question.prototype.getUser = function () {
        return this.user;
    };
    Question.prototype.setUser = function (user) {
        this.user = user;
    };
    Question.prototype.getTitle = function () {
        return this.title;
    };
    Question.prototype.setTitle = function (title) {
        this.title = title;
    };
    Question.prototype.getContent = function () {
        return this.content;
    };
    Question.prototype.setContent = function (content) {
        this.content = content;
    };
    Question.prototype.getAnswers = function () {
        return this.answers;
    };
    Question.prototype.setAnswers = function (answers) {
        this.answers = answers;
    };
    Question.prototype.addAnswer = function (answer) {
        this.answers.push(answer);
    };
    Question.prototype.getLikeCount = function () {
        return this.likeCount;
    };
    Question.prototype.setLikeCount = function (likeCount) {
        this.likeCount = likeCount;
    };
    Question.prototype.getTime = function () {
        return this.time;
    };
    Question.prototype.setTime = function (time) {
        this.time = time;
    };
    return Question;
}());
export { Question };
