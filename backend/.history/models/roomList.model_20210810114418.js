const mongoose = require("mongoose");

const { Schema } = mongoose;

const roomListSchema = new Schema({
  roomName: String,
  admin: String,
  members: [
    {
      memberID: String,
      memberName: String,
    },
  ],
});

module.exports = mongoose.model("roomList", roomListSchema);
