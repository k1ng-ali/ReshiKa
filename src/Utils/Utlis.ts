
export class User {
    private username:string;

    constructor(username:string = " ") {
        this.username = username;
    }

    public getUsername():string {
        return this.username;
    }

    public setUsername(username:string):void{
        this.username = username;
    }
}
const user = new User();

export class CurrentUser {
    private user: User;
    private password: string;

    constructor(user: User = new User(), password: string = " ") {
        this.user = user;
        this.password = password;
    }

    getUser():User {
        return this.user;
    }
    getPassword():string {
        return this.password;
    }
    setUser(user:User):void{
        this.user = user;
    }
    setPassword(password:string):void{
        this.password = password;
    }

}

export class Answers {
    private user: User;
    private title:string;
    private content: string;
    private isLiked: boolean;
    private likecounts: number;
    private time: string;

    constructor(user:User = new User(),
                   title:string = " ",
                   content:string = " ",
                   isLiked:boolean = false,
                   likecounts:number = 0,
                time:string = " "){
        this.user = user;
        this.title = title;
        this.content = content;
        this.likecounts = likecounts;
        this.isLiked = isLiked;
        this.time = time;
    };

    getUser():User {
        return this.user;
    }
    setUser(user:User){
        this.user = user;
    }
    getTitle():string {
        return this.title;
    }
    setTitle(title:string):void{
        this.title = title;
    }
    getContent():string {
        return this.content;
    }
    setContent(content:string){
        this.content = content;
    }
    getIsLiked():boolean {
        return this.isLiked;
    }
    setIsLiked(isLiked:boolean) {
        this.isLiked = isLiked;
    }
    getLikeCount():number {
        return this.likecounts;
    }
    setLikeCount(likeCount:number){
        this.likecounts = likeCount;
    }
    getTime():string{return this.time}
    setTime(time:string){this.time = time;}
}

export class Question {
    private user: User;
    private title:string;
    private content: string;
    private answers: Array<Answers>;
    private isLiked: boolean;
    private likeCount: number;
    private time: string;

    constructor(user:User = new User(),
                content:string = " ",
                title:string = " ",
                answers: Array<Answers> = [],
                isLiked:boolean = false,
                likeCount:number = 0,
                time:string = " "){
        this.user = user;
        this.title = title;
        this.content = content;
        this.answers = answers;
        this.likeCount = likeCount;
        this.isLiked = isLiked;
        this.time = time;
    }

    getUser():User {
        return this.user;
    }
    setUser(user:User){
        this.user = user;
    }
    getTitle():string {
        return this.title;
    }
    setTitle(title:string){
        this.title = title;
    }
    getContent():string {
        return this.content;
    }
    setContent(content:string){
        this.content = content;
    }
    getAnswers():Answers[] {
        return this.answers;
    }
    setAnswers(answers:Answers[]){
        this.answers = answers;
    }
    addAnswer(answer:Answers){
        this.answers.push(answer);
    }
    getLikeCount():number {
        return this.likeCount;
    }
    setLikeCount(likeCount:number){
        this.likeCount = likeCount;
    }
    getTime():string {
        return this.time;
    }
    setTime(time:string){
        this.time = time;
    }
}

