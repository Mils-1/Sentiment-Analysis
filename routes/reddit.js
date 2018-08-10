const express = require('express');
const router = express.Router();
const snoowrap = require('snoowrap');
const { redditUsername, redditPw, clientId, clientSecret } = require('../secrets.js');

const r = new snoowrap({
  userAgent: `chrome:localhost:v0 (by /u/_)`,
  clientId: clientId,
  clientSecret: clientSecret,
  username: redditUsername,
  password: redditPw
})

// /reddit
router.get('/', async (req, res, next) => {
  const data = await r.getHot().map(post => post.title);
  res.json(data);
});

module.exports = router;
