const User = require("../models/User");

const usersController = {
  getAll: (req, res) => {
    User.find({}, (err, data) => {
      if (err) {
        res.sendStatus(500);
        return;
      }
      res.json(data);
    });
  },
  create: (req, res) => {
    const { username, firstname, lastname, email } = req.body;
    User.create({ username, firstname, lastname, email })
      .then((data) => {
        res.send(data);
      })
      .catch((e) => {
        res.send(500);
      });
  },
  getByID: (req, res) => {
    const { userID } = req.params;
    User.findOne({ _id: userID }, (err, data) => {
      if (err) {
        res.sendStatus(500);
        return;
      }
      res.json(data);
    });
  }
};

module.exports = usersController;
