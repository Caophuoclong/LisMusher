const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  password: String,
  salt: String,
  info: {
    fullName: String,
    dob: Date,
    address: String,
    email: String,
  },
  listMusic: [],
  listRoom: [],
});

module.exports = mongoose.model("user", userSchema);
