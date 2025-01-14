import Tweet from './Tweet';

class User {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
  following: User[] = [];
  tweets: Tweet[] = [];
  likes: Tweet[] = [];

  constructor(id: string, name: string, username: string, email: string, password: string) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
  }

  follow(user: User): void {
    if (!this.following.includes(user)) {
      this.following.push(user);
    }
  }

  sendTweet(tweet: Tweet): void {
    this.tweets.push(tweet);
  }

  likeTweet(tweet: Tweet): void {
    if (!this.likes.includes(tweet)) {
      this.likes.push(tweet);
      tweet.like();
    }
  }

  replyTweet(tweet: Tweet, content: string): Tweet {
    const replyTweet = new Tweet(`reply-${this.id}-${tweet.replies.length + 1}`, content, 'Reply', this);
    tweet.reply(replyTweet);
    return replyTweet;
  }

  showFeed(): void {
    console.log(`Feed do usuário ${this.name}:`);
    this.following.forEach(userFollowed => {
      userFollowed.tweets.forEach(tweet => {
        tweet.show();
      });
    });
  }
}

export default User;
