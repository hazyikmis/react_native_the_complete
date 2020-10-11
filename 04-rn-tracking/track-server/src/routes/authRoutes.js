const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', async (req, res) => {
  //in order to send "body" as a part of your post request you need to require/import "body-parser" and use in the index.js
  //console.log(req.body);
  const { email, password } = req.body;
  const user = new User({ email, password });
  await user.save();

  res.send('You made a post request.');
});

module.exports = router;
