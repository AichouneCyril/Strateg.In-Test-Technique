const express = require("express");
const router = express.Router();
const User = require("../models/user");


router.post("/", async (req, res) => {
  try {
    const user = new User({
      email: req.body.email,
      password: req.body.password,
    });

    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).send({ message: "Invalid email or password" });
    }
    if (user.password !== req.body.password) {
      return res.status(400).send({ message: "Invalid email or password" });
    }
    res.send({ message: "Login successful" });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
