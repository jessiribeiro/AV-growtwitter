import { User } from "./User";

export class Tweet {
  private static idCounter = 1;
  public readonly id: number;
  public readonly user: User;
  public readonly content: string;
  public readonly type: "normal" | "reply";
  public likes: Set<User>;
  public replies: Tweet[];

  constructor(user: User, content: string, type: "normal" | "reply" = "normal") {
    if (!content.trim()) {
      throw new Error("Tweet content cannot be empty.");
    }
    this.id = Tweet.idCounter++;
    this.user = user;
    this.content = content.trim();
    this.type = type;
    this.likes = new Set();
    this.replies = [];
  }

  like(user: User): void {
    if (this.likes.has(user)) {
      throw new Error(`${user.username} already liked this tweet.`);
    }
    this.likes.add(user);
  }

  reply(user: User, content: string): Tweet {
    if (!content.trim()) {
      throw new Error("Reply content cannot be empty.");
    }
    const reply = new Tweet(user, content, "reply");
    this.replies.push(reply);
    return reply;
  }

  show(): void {
    console.log(`@${this.user.username}: ${this.content}`);
    if (this.likes.size > 0) {
      const likeText =
        this.likes.size === 1
          ? `@${[...this.likes][0].username} curtiu`
          : `@${[...this.likes][0].username} e mais ${this.likes.size - 1} curtiram`;
      console.log(`Likes: ${likeText}`);
    }
    if (this.replies.length > 0) {
      console.log("Replies:");
      this.replies.forEach(reply =>
        console.log(`> @${reply.user.username}: ${reply.content}`)
      );
    }
  }
}

