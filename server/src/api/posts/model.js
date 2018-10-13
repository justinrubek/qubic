import mongoose from "mongoose";

// TODO: Validation of Date and Time types
const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: String,
  date: { type: Date, default: Date.now }
}, { collection: "posts" });


module.exports = mongoose.model("Post", PostSchema);
