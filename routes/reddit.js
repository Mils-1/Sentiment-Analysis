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

// /reddit
router.get('/', async (req, res, next) => {
  try {
    const data = await r.getHot();
    //post titles
    //r.getHot().map(post => post.title);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

const createCommentStr = (arr) => {
  let commentStr = '';
  arr.forEach(elem => {
    if (elem.body !== '') {
      commentStr += elem.body;
    }
    if (elem[replies]) {
      commentStr += createCommentStr(elem[replies])
    }
  })
  return commentStr;
}

router.get('/e', async (req, res, next) => {
  try {
    const data = await r
      .getSubmission('967tme')
      .expandReplies({ limit: 500, depth: 1 })
      .comments;
    //const a = createCommentStr(data);
    console.log(`data.length: `, data.length);
    res.json(data);
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
