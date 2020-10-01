const Post = require("../models/Post");

const postsController = {
  getAll: (req, res) => {
    Post.find({}, (err, data) => {
      if (err) {
        res.sendStatus(500);
        return;
      }
      res.json(data);
    });
  },
  create: (req, res) => {
    const { title, body, userID } = req.body;
    Post.create({ title, body, userID })
      .then((data) => {
        res.send(data);
      })
      .catch((e) => {
        res.send(500);
      });
  },
  getByID: (req, res) => {
    const { postID } = req.params;
    Post.findOne({ _id: postID }, (err, data) => {
      if (err) {
        res.sendStatus(500);
        return;
      }
      res.json(data);
    });
  }
};

module.exports = postsController;
