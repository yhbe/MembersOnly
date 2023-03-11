const MessageBoard = require("../models/MessageModel");


module.exports = {
  post: async (req, res) => {
    try{
      const message = new MessageBoard({
        user: req.body.user,
        title: req.body.title,
        message: req.body.message
      })
      const savedMessage = await message.save()
      return res.status(201).json({ message: "Message Created!" });
    } catch(err) {
      res.status(400).json({ message: err.message });
    }
  },
}
