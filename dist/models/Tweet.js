"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tweet = void 0;
class Tweet {
    constructor(user, content, type = "normal") {
        this.id = Tweet.idCounter++;
        this.user = user;
        this.content = content;
        this.type = type;
        this.likes = new Set();
        this.replies = [];
    }
    like(user) {
        this.likes.add(user);
    }
    reply(user, content) {
        const reply = new Tweet(user, content, "reply");
        this.replies.push(reply);
        return reply;
    }
    show() {
        console.log(`@${this.user.username}: ${this.content}`);
        if (this.likes.size > 0) {
            const likeText = this.likes.size === 1
                ? `@${[...this.likes][0].username} curtiu`
                : `@${[...this.likes][0].username} e mais ${this.likes.size - 1} curtiram`;
            console.log(`Likes: ${likeText}`);
        }
        if (this.replies.length > 0) {
            console.log("Replies:");
            this.replies.forEach(reply => console.log(`> @${reply.user.username}: ${reply.content}`));
        }
    }
}
exports.Tweet = Tweet;
Tweet.idCounter = 1;
