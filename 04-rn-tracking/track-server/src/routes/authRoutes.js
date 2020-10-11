const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', async (req, res) => {
  //res.send('You made a post request.');

  //in order to send "body" as a part of your post request you need to require/import "body-parser" and use in the index.js
  //console.log(req.body);
  const { email, password } = req.body;

  try {
    const user = new User({ email, password });
    await user.save();
    //console.log(user);//strangely, _id automatically added to user after mongoose "save" command
    /*
{
  _id: 5f832b1442fe8b3becf55f34,
  email: 'halo1@test.com',
  password: 'pwd000',
  __v: 0
}
    */
    //console.log(process.env.JWT_SECRET_KEY);

    //jsonwebtoken (jwt) creation after successfully signing up
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY);

    //jsonwebtoken (jwt) sending to user after successfully creating it
    res.send({ token });
    //now, in the future requests, user can use this token to validate/authenticate itself
  } catch (err) {
    //422: some error in the user provided input
    res.status(422).send(err.message);
  }
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).send({ error: 'Must provide email and password!' });
  }

  const user = await User.findOne({ email });

  if (!user) {
    //return res.status(404).send({ error: 'Email not found!' });
    return res.status(422).send({ error: 'Invalid password or email!' });
  }

  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY);
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: 'Invalid password or email!' });
  }
});

module.exports = router;
