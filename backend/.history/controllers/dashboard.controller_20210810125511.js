const jwt = require("jsonwebtoken");
const userSchema = require("../models/users.model");
const roomListSchema = require("../models/roomList.model");
const serectKey = "2603";
module.exports = {
  response: async (req, res, next) => {
    const token = req.headers["authorization"];
    jwt.verify(token, serectKey, (error, decoded) => {
      if (error) {
        if (error.expiredAt) {
          return res.sendStatus(401);
        }
        {
          return res.sendStatus(403);
        }
      }
      req.auth = decoded;
    });
    try {
      const { id } = req.auth;
      console.log("xin chao dashboard");
      const user = await userSchema.findById(id);
      const { listRoom, listMusic } = user;
      return res.status(200).send({ listRoom, listMusic });
    } catch (error) {
      console.log(error);
    }
  },
  delete: (req, res, next) => {
    const token = req.headers["authorization"];
    const { index } = req.body;
    try {
      jwt.verify(token, "2603", async (error, data) => {
        if (error) {
          console.log(error);
          return res.sendStatus(403);
        }
        const id = data.id;
        const user = await userSchema.findById(id);
        const { listMusic } = user;
        listMusic.splice(index, 1);
        console.log(listMusic);
        const update = await userSchema.findByIdAndUpdate(
          { _id: id },
          {
            $set: {
              listMusic: listMusic,
            },
          },
          { upsert: true, new: true }
        );
        console.log(update);

        res.sendStatus(200);
      });
    } catch (error) {
      throw error;
    }
  },
  add: (req, res, next) => {
    const token = req.headers["authorization"];
    const { url } = req.body;
    jwt.verify(token, "2603", async (error, data) => {
      if (error) {
        console.log(error);
        return res.sendStatus(403);
      }
      const id = data.id;
      const update = await userSchema.findByIdAndUpdate(
        { _id: id },
        {
          $addToSet: {
            listMusic: url,
          },
        },
        { upsert: true, new: true }
      );
      console.log(update);

      res.sendStatus(200);
    });
  },
  createRoom: (req, res, next) => {
    const { roomName } = req.body;
    const token = req.headers["authorization"];
    jwt.verify(token, serectKey, async (err, data) => {
      if (err) {
        return res.status(403).send({ err });
      } else {
        const id = data.id;
        await userSchema.findByIdAndUpdate(
          { _id: id },
          {
            $addToSet: {
              listRoom: roomName,
            },
          },
          { upsert: true, new: true },
          (err, data) => {
            if (err) console.log(err);
            console.log(data);
          }
        );
        const user = await userSchema.findById(id);
        const { _id, username } = user;
        const roomList = await new roomListSchema({
          roomName,
          admin: _id,
          members: {
            memberID: _id,
            memberName: username,
          },
        });
        await roomList.save();
        return res.status(200).send({ message: "Create room success" });
      }
    });
  },
  joinRoom: (req, res, next) => {
    const { roomName } = req.body;
    const token = req.headers["authorization"];
    jwt.verify(token, serectKey, async (error, data) => {
      if (error) return res.status(403).send(error);
      else {
        const { id, username } = data;
        const id1 = req.params.id;
        if (id1 !== id)
          return res
            .status(400)
            .send({ message: "Loi khong xac dinh vui long dang nhap lai" });
        console.log(id, username);
        const roomname1 = await roomListSchema.findOne({ roomName });
        if (roomname1 === null)
          return res
            .status(400)
            .send({ message: "Room khong ton tai, vui long nhap lai ten" });
        await roomListSchema.findOneAndUpdate(
          { roomName: roomName },
          {
            $addToSet: {
              members: {
                memberID: id,
                memberName: username,
              },
            },
          },
          { upsert: true, new: true },
          (error, data) => {
            if (error) return res.status(400).send({ message: error });
            else {
              return res
                .status(200)
                .send({ message: "Join room successfully" });
            }
          }
        );
      }
    });
  },
  getMember: (req, res, next) => {
    const token = req.headers["authorization"];
    const { roomname } = req.query;
    console.log(roomname);
    return res.status(200).send("123");
  },
};
