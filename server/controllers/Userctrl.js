const User = require("../models/UserModel")

module.exports = {
  post: async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.userName,
      email: req.body.userEmail,
      password: req.body.userPassword
    })
    const savedUser = await newUser.save()
    return res.status(201).json({ message: "Item created successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }},
};