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

const twoLevels = (arr) => {
  const returnArr = [];
  arr.forEach(item => {
    if (item.body) returnArr.push(item.body);
    if (item.replies) {
      item.replies.forEach(nestedItem => {
        if (nestedItem.body) returnArr.push(nestedItem.body);
      })
    }
  })
  return returnArr;
}

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

const createTopLevelCommentArr = (arr) => arr.map(item => item.body);

router.get('/e', async (req, res, next) => {
  try {
    const data = await r
      .getSubmission('96z0n0')
      .expandReplies({ limit: 500, depth: 1 })
      .comments;
    const commentArr = createCommentArr(data);
    const topLevel = createTopLevelCommentArr(data);
    const twoLevelss = twoLevels(data);
    console.log('1', commentArr.length);
    console.log('2', topLevel.length);
    console.log('3', twoLevelss.length);
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
