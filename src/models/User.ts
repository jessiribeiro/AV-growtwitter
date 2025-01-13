import { Tweet } from "./Tweet";

export class User {
  private static idCounter = 1;
  public readonly id: number;
  public readonly username: string;
  public readonly name: string;
  public readonly email: string;
  private password: string;
  public following: Set<User>;
  public tweets: Tweet[];

  constructor(name: string, email: string, username: string, password: string) {
    this.id = User.idCounter++;
    this.name = name;
    this.email = email;
    this.username = username;
    this.password = password;
    this.following = new Set();
    this.tweets = [];
  }

  validatePassword(password: string): boolean {
    return this.password === password;
  }

  follow(user: User): void {
    if (user.id === this.id) throw new Error("Cannot follow yourself");
    this.following.add(user);
  }

  sendTweet(content: string): Tweet {
    const tweet = new Tweet(this, content, "normal");
    this.tweets.push(tweet);
    return tweet;
  }

  showFeed(): void {
    console.log(`Feed for ${this.username}:`);
    for (const user of this.following) {
      user.tweets.forEach(tweet => tweet.show());
    }
  }

  showTweets(): void {
    console.log(`Tweets by ${this.username}:`);
    this.tweets.forEach(tweet => tweet.show());
  }
}
