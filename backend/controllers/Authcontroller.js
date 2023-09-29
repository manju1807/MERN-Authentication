const User = require("../models/Users");
const test = (req, res) => {
  res.send("test successful");
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name) {
      return res.json({ error: "user name is required" });
    }
    if (!password || password.length < 6) {
      return res.json({
        error: "password is required and must be at least 6 characters",
      });
    }
    // Check if email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already registered" });
    }
    // Create a new user
    const newUser = await User.create({ name, email, password });
    return res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    // Handle errors and return an error response
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  test,
  registerUser,
};
