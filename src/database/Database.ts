import { User } from "../models/User";
import { Tweet } from "../models/Tweet";

export class Database {
  public users: User[] = [];
  public tweets: Tweet[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  addTweet(tweet: Tweet): void {
    this.tweets.push(tweet);
  }
}

export const db = new Database();

