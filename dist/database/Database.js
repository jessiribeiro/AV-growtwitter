"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.Database = void 0;
class Database {
    constructor() {
        this.users = [];
        this.tweets = [];
    }
    addUser(user) {
        this.users.push(user);
    }
    addTweet(tweet) {
        this.tweets.push(tweet);
    }
}
exports.Database = Database;
exports.db = new Database();
