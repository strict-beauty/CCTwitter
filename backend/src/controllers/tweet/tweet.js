/**
 * 
 */

const { Tweet, User, Like, Comment, Retweet } = require("../../db");
const { addTweetValidation } = require("../../utils/validation");
const upload = require("../upload");

module.exports = {
  addTweet: async (req, res) => {
    // Joi validation checks
    const validation = addTweetValidation(req.body);
    if (validation.error)
      return res.status(400).json({ errors: validation.error.details });

    upload(req.file, req.body.resource_type).then(async (media) => {
      try {
        const tweet = await Tweet.create({
          uid: req.body.uid,
          text: req.body.text,
          media: media.secure_url,
        });
        return res.status(200).json({ tweet });
      } catch (err) {
        return res.status(400).json({ errors: err });
      }
    });
  },
  getTweet: async (req, res) => {
    // body -> {tweetId, uid, myId}
    Promise.all([
      module.exports.getUserTweet(req.query.tweetId, req.query.uid),
      module.exports.isLikedByMe(req.query.tweetId, req.query.myId),
      module.exports.isRetweetedByMe(req.query.tweetId, req.query.myId),
    ]).then((values) => {
      let tweet = { ...values[0] };
      tweet = { ...tweet, selfLiked: values[1] ? true : false };
      tweet = { ...tweet, selfRetweeted: values[2] ? true : false };
      return res.status(200).json({ tweet });
    });
  },
  removeTweet: async (req, res) => {
    res.status(200).json({});
  },
  getUserTweet: async (tweetId, uid) => {
    const tweet = await User.findOne({
      attributes: ["uid", "domain", "avatar"],
      where: {
        uid: uid,
      },
      include: {
        model: Tweet,
        where: {
          id: tweetId,
        },
        required: true,
      },
      raw: true,
    });
    return tweet;
  },
  removeTweet: async (req, res) => {
    const { tweetId } = req.body;
    // body -> {tweetId}
    Promise.all([
      await Tweet.destroy({ where: { id: tweetId } }),
      await Like.destroy({ where: { tweetId } }),
      await Comment.destroy({ where: { tweetId } }),
      await Retweet.destroy({ where: { tweetId } }),
    ]).then((values) => {
      return res.status(200).json({ tweet: values[0] });
    });
  },
  isLikedByMe: async (tweetId, uid) => {
    const like = await Like.findOne({
      where: {
        tweetId,
        uid: uid,
      },
    });
    return like;
  },
  isRetweetedByMe: async (tweetId, uid) => {
    const retweet = await Retweet.findOne({
      where: {
        tweetId,
        uid: uid,
      },
    });
    return retweet;
  },
};
