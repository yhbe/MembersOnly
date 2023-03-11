const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.Mixed, required: true },
  title: { type: String, required: true },
  message: { type: String, required: true },
});


const MessageBoard = mongoose.model("Message", messageSchema);

module.exports = MessageBoard;
