import User from './User';

class Tweet {
  id: string;
  content: string;
  type: 'Normal' | 'Reply';
  author: User;
  likes: number = 0;
  replies: Tweet[] = [];

  constructor(id: string, content: string, type: 'Normal' | 'Reply', author: User) {
    this.id = id;
    this.content = content;
    this.type = type;
    this.author = author;
  }

  like(): void {
    this.likes += 1;
  }

  reply(replyTweet: Tweet): void {
    this.replies.push(replyTweet);
  }

  show(): void {
    console.log(`@${this.author.username}: ${this.content}`);
    console.log(`Curtidas: ${this.likes}`);
    if (this.replies.length > 0) {
      console.log('Respostas:');
      this.replies.forEach(reply => {
        console.log(`> @${reply.author.username}: ${reply.content}`);
      });
    } else {
      console.log('Sem respostas.');
    }
  }
}

export default Tweet;
