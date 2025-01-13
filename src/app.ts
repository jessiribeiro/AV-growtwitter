import { User } from "./models/User";

const alice = new User("Alice", "alice@mail.com", "alice123", "password1");
const bob = new User("Bob", "bob@mail.com", "bob123", "password2");
const charlie = new User("Charlie", "charlie@mail.com", "charlie123", "password3");

alice.follow(bob);
alice.follow(charlie);

const tweet1 = bob.sendTweet("Hello, Twitter!");
const tweet2 = charlie.sendTweet("Welcome to my profile.");
const reply = tweet1.reply(alice, "Nice to see you here!");

tweet1.like(alice);
tweet2.like(alice);
tweet2.like(bob);

console.log("----- Tweets -----");
alice.showFeed();
