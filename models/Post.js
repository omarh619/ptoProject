const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  to: {
    type: Date,
    require: true,
  },
  reason: {
    type: String,
    required: true,
  },
  
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
