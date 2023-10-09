const User = require("../models/Users");
const jwt = require("jsonwebtoken");
const process = require("process");
const { hashPassword, comparePassword } = require("../helpers/AuthHashing");

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
    const Hashedpassword = await hashPassword(password);
    const newUser = await User.create({
      name,
      email,
      password: Hashedpassword,
    });
    return res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    // Handle errors and return an error response
    return res.status(500).json({ error: "Internal server error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "User not found" });
    }

    const match = await comparePassword(password, user.password);
    if (match) {
      res.json({ msg: "login successful" });
      jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        process.env.JWT_SecretKey
      ),
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(user);
        };
    }
    if (!match) {
      res.json({ error: "password is not correct" });
    }
  } catch (err) {
    console.error(err);
  }
};

const getProfile = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SecretKey, {}, (err, user) => {
      if (err) {
        console.error(err); // Log the error
        res.status(500).json({ error: "Internal Server Error" }); // Send a 500 response
      } else {
        res.json(user); // Sending the user data if verification is successful
      }
    });
  } else {
    res.json(null); // Sending null if there is no token
  }
};

module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile,
};
