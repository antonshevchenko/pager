var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var Page = new Schema({
  pageID: String,
  userID: String,
  options: Object,
  created_at: { type: Date, default: Date.now }
});

var page = mongoose.model('Page', Page);

module.exports = page;
