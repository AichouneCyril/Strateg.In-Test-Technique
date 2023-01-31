const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user");

router.post("/", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Email not found");

    if (user.password !== req.body.password) {
      return res.status(400).send("Invalid password or email");
    }

    const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET, {
      expiresIn: 86400, // expires in 24 hours
    });

    res.status(200).send({ auth: true, token: token });
  } catch (err) {
    res.status(500).send("Error on the server.");
  }
});

module.exports = router;
