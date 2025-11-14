const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const auth = require("../middleware/auth");
const router = express.Router();

// SIGNUP
router.post("/signup", async (req, res) => {
  try {
    let { username, password } = req.body;
    username = username.trim().toLowerCase();

    const existingUser = await User.findOne({ username });
    if (existingUser) return res.status(400).json({ message: "Username already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    console.error(err);
    if (err.code === 11000) return res.status(400).json({ message: "Username already exists" });
    res.status(500).json({ message: "Internal server error" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    let { username, password } = req.body;
    username = username.trim().toLowerCase();

    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ message: "Login successful", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// HOME (protected)
router.get("/home", auth, (req, res) => {
  res.json({ message: `Welcome, ${req.user.username}!` });
});

module.exports = router;
