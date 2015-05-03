var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var User = new Schema({
  userID: String,
  accessToken: String,
  created_at: { type: Date, default: Date.now }
});

var user = mongoose.model('User', User);

module.exports = user;
