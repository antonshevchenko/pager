var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var Page = new Schema({
  pageId: String,
  options: Object,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  created_at: { type: Date, default: Date.now }
});

Page.virtual('id').get(function () {
  return this._id.toString();
});

Page.set('toJSON', {
  virtuals: true
});

Pitch.statics.getById = function (id, fields, callback) {
  this.findById(id, fields).populate('user').exec(callback);
};

Pitch.statics.getOneAndUpdate = function (id, data, callback) {
  this.findByIdAndUpdate(id, { $set: data }).populate('user').exec(callback);
};

var page = mongoose.model('Page', Page);

module.exports = page;
