const User = require("../models/user");

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send({ data: users });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    res.status(200).send({ data: user });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    res.status(200).send({ data: user });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    res.status(200).send({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
