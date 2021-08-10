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
        return res.status(200).send({ message: "Create room success" });
      }
    });
  },
  joinRoom: (req, res, next) => {},
};
