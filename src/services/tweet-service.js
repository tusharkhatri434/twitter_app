const { HashRepository, TweetRepository } = require("../repository/index");

class TweetService {
  constructor() {
    this.hashRepository = new HashRepository();
    this.tweetRepository = new TweetRepository();
  }

  async create(data) {
    try {
      const content = data.content;
      const tags = content
        .match(/#[a-zA-Z0-9_]+/g)
        .map((tag) => tag.substring(1).toLowerCase()); // this regex extracts hashtags

      const tweet = await this.tweetRepository.create(data);
      let alreadyPresentTags = await this.hashRepository.findByName(tags);
      let titleOfPresenttags = alreadyPresentTags.map((tags) => tags.title);
      let newTags = tags.filter((tag) => !titleOfPresenttags.includes(tag));
      newTags = newTags.map((tag) => {
        return { title: tag, tweets: [tweet.id] };
      });

      await this.hashRepository.bulkInsert(newTags);
      alreadyPresentTags.forEach((tag) => {
        tag.tweets.push(tweet.id);
        tag.save();
      });

      return tweet;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getWithComments(id) {
    try {
      const response = await this.tweetRepository.getWithComments(id);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TweetService;