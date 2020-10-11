const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
  timestamp: Number,
  coords: {
    latitude: Number,
    longitude: Number,
    altitude: Number,
    accuracy: Number,
    heading: Number,
    speed: Number,
  },
});

const trackSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
    default: '',
  },
  locations: [pointSchema],
});

//we do not want to create a collection for pointSchema in the MongoDB
//it's just embedded inside the trackSchema, this is the reason we are
//just creating model for only trackSchema
mongoose.model('Track', trackSchema);
