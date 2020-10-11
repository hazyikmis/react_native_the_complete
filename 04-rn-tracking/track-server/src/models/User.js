const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//not arrow function used, because we want to access thing inside this with "this"
userSchema.pre('save', function (next) {
  const user = this;
  //if the password is not changed
  if (!user.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    //if no errors then "salt" generated
    //now using this "salt", lets created salted-hash of the password
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

//I'm going to write out inside of our userSchema.methods.comparePassword and then I'll sign
//this a function. Notice that I'm once again using the keyword "function" right here.
//That's because inside this function the value of "this" is going to be equal to the "user" we are operating on.
//If we use a arrow function instead the value of "this" will be set to the context of this file which not what we want.
userSchema.methods.comparePassword = function (candidatePassword) {
  const user = this;
  //the reason why we are using "Promise" structure is bcrypt library relies upon only callbacks entirely. (not async-await structure)
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
      if (err) {
        return reject(err);
      }
      if (!isMatch) {
        return reject(false);
      }
      resolve(true);
    });
  });
};

mongoose.model('User', userSchema);
//we are not exporting anything from that file,
//just require this once at the beginning of our index.js,
//because, this code should be run once at a time
