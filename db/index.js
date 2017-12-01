const mongoose = require('mongoose');
var config = require('../config/config.example.js');
if (!process.env.MONGODB_URI) {
  config = require('../config/config.js');
}

const dbUri = process.env.MONGODB_URI || config.MONGODB_URI ||'mongodb://localhost:27017/CMDB';
mongoose.Promise = global.Promise;
const db = mongoose.connect(dbUri, {
  useMongoClient: true,
});

module.exports = db;
