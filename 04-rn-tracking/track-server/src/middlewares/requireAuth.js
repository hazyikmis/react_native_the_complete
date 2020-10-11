const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = (req, res, next) => {
  //we gonna inspect that incoming requests has a valid token
  //we need to look for the header that authorization provided by the header
  const { authorization } = req.headers;
  // authorization --> Bearer skdjlfksjlfksjdkfjskd...

  if (!authorization) {
    return res.status(401).send({ error: 'You must be logged in!' });
  }

  const token = authorization.replace('Bearer ', '');
  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
    //payload is the data what we have put inside when creating it (check authRoutes.js file, jwt.sign(...))
    if (err) {
      return res.status(401).send({ error: 'You must be logged in!' });
    }
    //now, we are trying to identify which user made the request
    const { userId } = payload;
    const user = await User.findById(userId);
    req.user = user; //to let all other processes can access the user info from request object
    next();
  });
};
