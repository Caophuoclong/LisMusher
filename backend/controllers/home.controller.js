module.exports = {
  getHome: (req, res) => {
    res.status(200).send({ xinchao: "Chao ban" });
  },
  postHome: (req, res) => {
    console.log(req);
  },
};
