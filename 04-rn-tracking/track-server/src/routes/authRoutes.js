const express = require('express');

const router = express.Router();

router.post('/signup', (req, res) => {
  //in order to send "body" as a part of your post request you need to require/import "body-parser" and use in the index.js
  console.log(req.body);
  res.send('You made a post request.');
});

module.exports = router;
