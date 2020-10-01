const express = require("express");
const usersController = require("../controllers/usersController");

const router = express.Router();

router.get("/", usersController.getAll);
router.get("/:userID", usersController.getByID);
router.post("/", usersController.create);

module.exports = router;
