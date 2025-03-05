const express = require("express");

const UserController = require('../controllers/user')

const route = express.Router();

route.get("/:name", UserController.Hello);

module.exports = route
