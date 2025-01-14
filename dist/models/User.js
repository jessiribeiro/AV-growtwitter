"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tweet_1 = __importDefault(require("./Tweet"));
class User {
    constructor(id, name, username, email, password) {
        this.following = [];
        this.tweets = [];
        this.likes = [];
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
    }
    follow(user) {
        if (!this.following.includes(user)) {
            this.following.push(user);
        }
    }
    sendTweet(tweet) {
        this.tweets.push(tweet);
    }
    likeTweet(tweet) {
        if (!this.likes.includes(tweet)) {
            this.likes.push(tweet);
            tweet.like();
        }
    }
    replyTweet(tweet, content) {
        const replyTweet = new Tweet_1.default(`reply-${this.id}-${tweet.replies.length + 1}`, content, 'Reply', this);
        tweet.reply(replyTweet);
        return replyTweet;
    }
    showFeed() {
        console.log(`Feed do usuário ${this.name}:`);
        this.following.forEach(userFollowed => {
            userFollowed.tweets.forEach(tweet => {
                tweet.show();
            });
        });
    }
}
exports.default = User;
