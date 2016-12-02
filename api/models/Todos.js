var mongoose = require('mongoose');

var TodoSchema = mongoose.Schema({
  description: String,
  completed: Boolean
});

module.exports = mongoose.model('Todo', TodoSchema);
