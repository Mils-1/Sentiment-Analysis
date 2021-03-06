const express = require('express');
const router = express.Router();
const snoowrap = require('snoowrap');
const {
  redditUsername,
  redditPw,
  clientId,
  clientSecret
} = require('../secrets.js');

const r = new snoowrap({
  userAgent: `chrome:localhost:v0 (by /u/_)`,
  clientId: clientId,
  clientSecret: clientSecret,
  username: redditUsername,
  password: redditPw
});

//r.config({ continueAfterRatelimitError: true });

// /reddit/hot
router.get('/hot', async (req, res, next) => {
  try {
    const data = await r.getHot();
    //post titles
    //r.getHot().map(post => post.title);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

const createCommentArr = (arr) => {
  let commentArr = [];
  arr.forEach(elem => {
    if (elem.body !== '') {
      commentArr.push(elem.body);
    }
    if (elem.replies.length) {
      commentArr.push(...createCommentArr(elem.replies));
    }
  })
  return commentArr;
}

router.get('/:subId/comments', async (req, res, next) => {
  const { subId } = req.params;
  try {
    const data = await r
      .getSubmission(subId)
      .expandReplies({ limit: 500, depth: 1 })
      .comments;
    const commentArr = createCommentArr(data);
    res.send(commentArr);
  } catch (err) {
    next(err);
  }
});

router.get('/random', async (req, res, next) => {
  try {
    const randomSub = await r
      .getRandomSubmission()
      .expandReplies({ limit: 500, depth: 1 });
    res.json(randomSub);
  } catch (err) {
    next(err)
  }
});

module.exports = router;
