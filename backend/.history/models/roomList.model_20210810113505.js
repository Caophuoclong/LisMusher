const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
    roomName: String,
    admin: String,
    member: [
        memberID: String,
        memberName: String,
    ]
});

module.exports = mongoose.model("roomList", roomListSchema);
