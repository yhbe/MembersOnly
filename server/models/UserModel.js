const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  isMember: {type: Boolean, required: false}
})

userSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = candidatePassword === this.password
  return isMatch;
};

const User = mongoose.model("User", userSchema)

module.exports = User