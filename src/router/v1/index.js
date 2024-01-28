const express = require("express");
const router = express.Router();
const tweetController = require('../../controllers/tweet-controller');
const commentController = require('../../controllers/comment-controller');

router.get("/tweetcomment/:id",tweetController.getWithComments);

router.post("/tweet", tweetController.create);
router.post("/comment", commentController.create);

module.exports = router;
