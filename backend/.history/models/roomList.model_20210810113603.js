const mongoose = require("mongoose");

const { Schema } = mongoose;

const roomListSchema = new Schema({
  roomName: String,
  admin: String,
  password: Boolean,
  member: [
    {
      memberID: String,
      memberName: String,
    },
  ],
});

module.exports = mongoose.model("roomList", roomListSchema);
