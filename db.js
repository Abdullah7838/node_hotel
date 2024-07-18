const mongoose = require("mongoose");
require('dotenv').config();

const mongoURL = process.env.DBURL;

mongoose.connect(mongoURL)
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((error) => {
    console.error('Error connecting to DB', error);
  });

const db = mongoose.connection;

db.on('disconnected', () => {
  console.log('Disconnected from DB');
});

db.on('error', (error) => {
  console.log('Internal Server Error', error);
});

module.exports = {
  db
};
