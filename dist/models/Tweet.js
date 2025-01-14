"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tweet {
    constructor(id, content, type, author) {
        this.likes = 0;
        this.replies = [];
        this.id = id;
        this.content = content;
        this.type = type;
        this.author = author;
    }
    like() {
        this.likes += 1;
    }
    reply(replyTweet) {
        this.replies.push(replyTweet);
    }
    show() {
        console.log(`@${this.author.username}: ${this.content}`);
        console.log(`Curtidas: ${this.likes}`);
        if (this.replies.length > 0) {
            console.log('Respostas:');
            this.replies.forEach(reply => {
                console.log(`> @${reply.author.username}: ${reply.content}`);
            });
        }
        else {
            console.log('Sem respostas.');
        }
    }
}
exports.default = Tweet;
