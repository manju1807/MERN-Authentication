const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  test,
  registerUser,
  loginUser,
  getProfile,
} = require("../controllers/Authcontroller");

// Middleware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.get("/test", test);
router.post("/api/register", registerUser);
router.post("/api/login", loginUser);
router.get("/api/profile", getProfile);

module.exports = router;
