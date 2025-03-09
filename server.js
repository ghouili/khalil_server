const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const UserRourtes = require("./routes/user");

const port = 4000;

const server = express();

server.use(cors());

server.use(express.json());

server.use("/uploads/images", express.static(path.join("uploads", "images")));
server.use("/user", UserRourtes);
server.use("/produit", UserRourtes);
server.use("/produit", UserRourtes);

mongoose
  .connect("mongodb+srv://admin:admin@cluster0.1irjm.mongodb.net/")
  .then((res) =>
    server.listen(port, () => {
      console.log(`server is rnning successfully on port ${port}`);
    })
  )
  .catch((err) => console.log(err));
