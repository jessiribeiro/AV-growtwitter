import User from './User';
import Tweet from './Tweet';

class Like {
  id: string;
  user: User;
  tweet: Tweet;

  constructor(id: string, user: User, tweet: Tweet) {
    this.id = id;
    this.user = user;
    this.tweet = tweet;
  }
}

export default Like;
