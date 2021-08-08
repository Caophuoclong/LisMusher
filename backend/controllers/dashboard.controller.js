const jwt = require("jsonwebtoken");
const userSchema = require("../models/users.model");
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
    const { id } = req.auth;
    const user = await userSchema.findById(id);
    const { listRoom, listMusic } = user;
    return res.status(200).send({ listRoom, listMusic });
  },
};
