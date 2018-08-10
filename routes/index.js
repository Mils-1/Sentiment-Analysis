const express = require('express');
const router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendFile(path.join(__dirname, '..', 'client', 'public', 'index.html'))
});

module.exports = router;
