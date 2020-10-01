const express = require("express");
const postsController = require("../controllers/postsController");

const router = express.Router();

router.get("/", postsController.getAll);
router.get("/:postID", postsController.getByID);
router.post("/", postsController.create);

module.exports = router;
