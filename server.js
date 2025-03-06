const express = require("express");
const mongoose = require("mongoose");
const UserRourtes = require("./routes/user");

const port = 4000;

const server = express();

server.use(express.json());

server.use("/user", UserRourtes);

mongoose
  .connect("mongodb+srv://admin:admin@cluster0.1irjm.mongodb.net/")
  .then((res) =>
    server.listen(port, () => {
      console.log(`server is rnning successfully on port ${port}`);
    })
  )
  .catch((err) => console.log(err));
