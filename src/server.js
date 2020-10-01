const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const usersRoutes = require("./routes/usersRoutes");
const postsRoutes = require("./routes/postsRoutes");
require("dotenv").config();
require("./dbConfig");

const app = express();

/* CORS handling to be able to access endpoints from POSTMAN and others */
app.use(cors({ origin: "*" }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.use("/users", usersRoutes);
app.use("/posts", postsRoutes);

app.listen(3001, () => console.info("Server listening on port 3001"));
