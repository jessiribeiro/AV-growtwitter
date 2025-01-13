"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Tweet_1 = require("./Tweet");
class User {
    constructor(name, email, username, password) {
        this.id = User.idCounter++;
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
        this.following = new Set();
        this.tweets = [];
    }
    validatePassword(password) {
        return this.password === password;
    }
    follow(user) {
        if (user.id === this.id)
            throw new Error("Cannot follow yourself");
        this.following.add(user);
    }
    sendTweet(content) {
        const tweet = new Tweet_1.Tweet(this, content, "normal");
        this.tweets.push(tweet);
        return tweet;
    }
    showFeed() {
        console.log(`Feed for ${this.username}:`);
        for (const user of this.following) {
            user.tweets.forEach(tweet => tweet.show());
        }
    }
    showTweets() {
        console.log(`Tweets by ${this.username}:`);
        this.tweets.forEach(tweet => tweet.show());
    }
}
exports.User = User;
User.idCounter = 1;
