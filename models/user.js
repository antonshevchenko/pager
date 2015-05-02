var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var User = new Schema({
  accessToken: String,
  created_at: { type: Date, default: Date.now }
});

User.virtual('id').get(function () {
  return this._id.toString();
});

User.virtual('id').set(function (id) {
  this._id = id;
});

User.set('toJSON', {
  virtuals: true
});

var user = mongoose.model('User', User);

module.exports = user;
