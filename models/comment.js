var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var commentSchema = new Schema({
  name: {
    type: String,
    requrired: true,
    minlength: 3
  },
  email: {
    type: String,
    index: true,
    unique: true,
    requrired: true,
    minlength: 3
  },
  comments: {
    type: String,
    requrired: true,
    minlength: 4
  },
});

var Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
