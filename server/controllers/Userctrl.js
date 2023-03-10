const User = require("../models/UserModel");
const { generateAccessToken } = require("../utils/generateAccessToken");

module.exports = {
  post: async (req, res) => {
    try {
      const newUser = new User({
        name: req.body.userName,
        email: req.body.userEmail,
        password: req.body.userPassword,
      });
      const savedUser = await newUser.save();
      return res.status(201).json({ message: "Item created successfully" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  login: async (req, res) => {
    try {
      const email = req.body.userEmail;
      const password = req.body.userPassword;

      // Check if the provided email exists in the database
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(401).json({ message: "Invalid email" });
      }

      // Check if password matches
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(401).json({ message: "passwords do not match" });
      }

      // If the user exists and the password matches, generate an access token
      const accessToken = generateAccessToken(user._id);

      // Send the access token & user in the response
      return res.status(200).json({ token: accessToken, user: user });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  joinClub: async (req, res) => {
    try {
      const email = req.body.email;

     // Finds the user by their email and adds membership
      const updatedUser = await User.findOneAndUpdate(
        { email },
        { isMember: true },
        { new: true } // Setting new returns updated obj not old one
      );

      return res.status(200).json({ user: updatedUser });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
};