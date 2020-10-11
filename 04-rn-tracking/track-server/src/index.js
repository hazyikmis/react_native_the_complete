const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

require('./models/User');

const app = express();

require('dotenv').config();

app.use(bodyParser.json());
app.use(authRoutes);

let mongoUri = process.env.MONGO_DB_CONN_STR;
mongoUri = mongoUri
  .replace('<username>', process.env.MONGO_DB_USER)
  .replace('<password>', process.env.MONGO_DB_PWD)
  .replace('<dbname>', process.env.MONGO_DB_NAME);

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
  console.log('MongoDB connection is successful...');
});
mongoose.connection.on('error', (err) => {
  console.log('ERROR connecting to MongoDB!', err);
});

app.get('/', (req, res) => {
  res.send('Hi there!');
});

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
