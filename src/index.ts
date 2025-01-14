import User from './models/User';
import Tweet from './models/Tweet';
import Database from './database/Database';

//usuários
const alice = new User('1', 'Alice', 'alice123', 'alice@mail.com', 'senha1');
const bob = new User('2', 'Bob', 'bob123', 'bob@mail.com', 'senha2');
const charlie = new User('3', 'Charlie', 'charlie123', 'charlie@mail.com', 'senha3');

Database.users.push(alice, bob, charlie);

// follow
alice.follow(bob);
alice.follow(charlie);
bob.follow(alice);
bob.follow(charlie);
charlie.follow(alice);

// tweets
const tweetAlice = new Tweet('1', 'Dia lindo!', 'Normal', alice);
const tweetBob = new Tweet('2', 'Hoje eu to marley...', 'Normal', bob);
const tweetCharlie = new Tweet('3', 'Os preços do mercado estão me dando depressão...', 'Normal', charlie);

Database.tweets.push(tweetAlice, tweetBob, tweetCharlie);

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

Database.tweets.push(replyToBob, replyToCharlie, replyToAlice);

// Exibindo os feeds
console.log('Feed da Alice:');
alice.showFeed();

console.log('\nFeed do Bob:');
bob.showFeed();

console.log('\nFeed do Charlie:');
charlie.showFeed();


