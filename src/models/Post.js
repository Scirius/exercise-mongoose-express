const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  body: String,
  author: { type: String, default: "J" },
  date: { type: Date, default: Date.now },
  userID: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model("Post", postSchema);
