const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id: 1, username: 'Nick'},
    {id: 2, username: 'another one'}
  ])
});

module.exports = router;
