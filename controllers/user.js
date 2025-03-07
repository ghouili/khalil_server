const user = require("../models/user");
const bcrypt = require("bcryptjs");

const AddUser = async (req, res) => {
  const { email, name, age, password } = req.body;

  // console.log(req.file)
  let existUser;
  try {
    existUser = await user.findOne({ email: email });
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: "Something went wrong while checking xisting user",
      data: error,
    });
  }

  if (existUser) {
    return res
      .status(200)
      .json({ sucess: false, message: "email alreay exist", data: null });
  }
  let pic = "avatar.png";
  if (req.file) {
    pic = req.file.filename;
  }
  let hashedPassword = await bcrypt.hash(password, 10);
  const NewUser = new user({
    email,
    name,
    age,
    pic,
    password: hashedPassword,
  });

  try {
    await NewUser.save();
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: "Something went wrong while saving new user",
      data: error,
    });
  }

  return res
    .status(201)
    .json({ sucess: true, message: "user added successfully", data: NewUser });
  // return res
  //   .status(201)
  //   .json({ sucess: true, message: "user added successfully", data: req.file });
};

const FindUserById = async (req, res) => {
  const { id } = req.params;
  let existUser;
  try {
    existUser = await user.findById(id);
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: "Something went wrong while checking xisting user",
      data: error,
    });
  }

  if (!existUser) {
    return res
      .status(200)
      .json({ sucess: false, message: "user doesn't exist", data: null });
  }

  return res.status(200).json({
    sucess: true,
    message: "user was found successfully",
    data: existUser,
  });
};

const AllUser = async (req, res) => {
  let allUsers;
  try {
    allUsers = await user.find();
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: "Something went wrong while checking xisting user",
      data: error,
    });
  }

  return res.status(200).json({
    sucess: true,
    message: "all users was found successfully",
    data: allUsers,
  });
};

const UpdateUser = async (req, res) => {
  const { id } = req.params;
  const { email, name, age, password } = req.body;
  let existUser;
  try {
    existUser = await user.findById(id);
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: "Something went wrong while checking xisting user",
      data: error,
    });
  }

  if (!existUser) {
    return res
      .status(200)
      .json({ sucess: false, message: "user doesn't exist", data: null });
  }

  existUser.email = email;
  existUser.name = name;
  existUser.age = age;

  try {
    await existUser.save();
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: "Something went wrong while saving new user",
      data: error,
    });
  }

  return res.status(201).json({
    sucess: true,
    message: "user updatd successfully",
    data: existUser,
  });
};

const DeleteUser = async (req, res) => {
  const { id } = req.params;
  let existUser;
  try {
    existUser = await user.findById(id);
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: "Something went wrong while checking xisting user",
      data: error,
    });
  }

  if (!existUser) {
    return res
      .status(200)
      .json({ sucess: false, message: "user doesn't exist", data: null });
  }

  try {
    await existUser.deleteOne();
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: "Something went wrong while delete user",
      data: error,
    });
  }

  return res.status(200).json({
    sucess: true,
    message: "user was deleted successfully",
    data: null,
  });
};

const login = async (req, res) => {
  // get data
  // check email in db
  // compare password
  // res
};

const register = async (req, res) => {
  // get data
  // check email in db
  // hash password
  // save user
  // res
};

const Hello = (req, res) => {
  const { name } = req.params;
  return res.json({
    staus: "success",
    message: `welcome Mr ${name}`,
    error: false,
  });
};

exports.Hello = Hello;
exports.AddUser = AddUser;
exports.AllUser = AllUser;
exports.FindUserById = FindUserById;
exports.DeleteUser = DeleteUser;
exports.UpdateUser = UpdateUser;
