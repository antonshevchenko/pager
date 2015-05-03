var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var Page = new Schema({
  pageID: String,
  options: Object,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  created_at: { type: Date, default: Date.now }
});

Page.statics.getById = function (id, fields, callback) {
  this.findOne({ pageID: id }, fields).populate('user').exec(callback);
};

Page.statics.getOneAndUpdate = function (id, data, callback) {
  this.findOneAndUpdate({ pageID: id }, { $set: data }).populate('user').exec(callback);
};

var page = mongoose.model('Page', Page);

module.exports = page;
