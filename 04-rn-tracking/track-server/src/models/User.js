const mongoose = require('mongoose');

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

mongoose.model('User', userSchema);
//we are not exporting anything from that file,
//just require this once at the beginning of our index.js,
//because, this code should be run once at a time
