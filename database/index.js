const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TodoList = new Schema({
    description: String,
    complete: Boolean
  });

  module.exports= mongoose.model("Todos", TodoList);