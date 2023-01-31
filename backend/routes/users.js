const express = require("express");
const router = express.Router();

// Get all users
router.get("/", (req, res) => {
  res.send("Get all users");
});

// Get single user by id
router.get("/:id", (req, res) => {
  res.send(`Get user with id: ${req.params.id}`);
});

// Create new user
router.post("/", (req, res) => {
  res.send("Create new user");
});

// Update user by id
router.put("/:id", (req, res) => {
  res.send(`Update user with id: ${req.params.id}`);
});

// Delete user by id
router.delete("/:id", (req, res) => {
  res.send(`Delete user with id: ${req.params.id}`);
});


module.exports = router
    ;
