const { CommentRepository, TweetRepository } = require("../repository/index.js");

class CommentService {
  constructor() {
    this.commentRepository = new CommentRepository();
    this.tweetRepository = new TweetRepository();
  }

  async create(modelId, modelType, userId, content) {
  try{
    if (modelType == "Tweet") {
      var commentable = await this.tweetRepository.get(modelId);
    } else if (modelType == "Comment") {
      var commentable = await this.commentRepository.get(modelId);
    } else {
      throw new Error("unknown model type");
    }
    console.log(commentable);
    const comment = await this.commentRepository.create({
      content: content,
      userId: userId,
      onModel: modelType,
      commentable: modelId,
      comments: [],
    });
    console.log(comment);
    commentable.comments.push(comment);
    await commentable.save();

    return comment;
    } catch (err) {
      throw err;
    }

}

}

module.exports = CommentService;
