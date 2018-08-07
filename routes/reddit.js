var express = require('express');
var router = express.Router();
const snoowrap = require('snoowrap');
const { redditUsername, redditPw, clientId, clientSecret } = require('../secrets.js');
const r = new snoowrap({
  userAgent: `chrome:localhost:v0 (by /u/chronic_knick)`,
  clientId: clientId,
  clientSecret: clientSecret,
  username: redditUsername,
  password: redditPw
})

/* GET home page. */
router.get('/', function(req, res, next) {
  r.getHot().map(post => post.title).then(console.log);
});

module.exports = router;
