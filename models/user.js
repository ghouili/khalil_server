const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  name: { type: String },
  age: { type: Number },
  password: { type: String },
});

module.exports = mongoose.model("user", UserSchema);
