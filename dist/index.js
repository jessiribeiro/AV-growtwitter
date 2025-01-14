"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./models/User"));
const Tweet_1 = __importDefault(require("./models/Tweet"));
const Database_1 = __importDefault(require("./database/Database"));
//usuários
const alice = new User_1.default('1', 'Alice', 'alice123', 'alice@mail.com', 'senha1');
const bob = new User_1.default('2', 'Bob', 'bob123', 'bob@mail.com', 'senha2');
const charlie = new User_1.default('3', 'Charlie', 'charlie123', 'charlie@mail.com', 'senha3');
Database_1.default.users.push(alice, bob, charlie);
// follow
alice.follow(bob);
alice.follow(charlie);
bob.follow(alice);
bob.follow(charlie);
charlie.follow(alice);
// tweets
const tweetAlice = new Tweet_1.default('1', 'Dia lindo!', 'Normal', alice);
const tweetBob = new Tweet_1.default('2', 'Hoje eu to marley...', 'Normal', bob);
const tweetCharlie = new Tweet_1.default('3', 'Os preços do mercado estão me dando depressão...', 'Normal', charlie);
Database_1.default.tweets.push(tweetAlice, tweetBob, tweetCharlie);
alice.sendTweet(tweetAlice);
bob.sendTweet(tweetBob);
charlie.sendTweet(tweetCharlie);
// Curtindo tweets
alice.likeTweet(tweetBob);
charlie.likeTweet(tweetAlice);
bob.likeTweet(tweetCharlie);
// Respondendo tweets
const replyToBob = alice.replyTweet(tweetBob, 'KKK');
const replyToCharlie = bob.replyTweet(tweetCharlie, 'Nem me fala, irmão.');
const replyToAlice = charlie.replyTweet(tweetAlice, 'Concordo!');
Database_1.default.tweets.push(replyToBob, replyToCharlie, replyToAlice);
// Exibindo os feeds
console.log('Feed da Alice:');
alice.showFeed();
console.log('\nFeed do Bob:');
bob.showFeed();
console.log('\nFeed do Charlie:');
charlie.showFeed();
