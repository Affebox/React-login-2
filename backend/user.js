const mongoose = require("mongoose");
const user = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  fullname: String,
});

module.exports = mongoose.model("User", user);