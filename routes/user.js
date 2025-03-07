const express = require("express");

const fileUploader = require("../middlewares/Fileuploader");

const UserController = require("../controllers/user");

const route = express.Router();

route.get("/:id", UserController.FindUserById);

route.get("/", UserController.AllUser);

route.post("/add", fileUploader.single("pic"), UserController.AddUser);

route.put("/:id", UserController.UpdateUser);

route.delete("/:id", UserController.DeleteUser);

route.get("/hello/:name", UserController.Hello);

module.exports = route;
