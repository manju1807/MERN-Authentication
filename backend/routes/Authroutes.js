const express = require("express");
const router = express.Router();
const cors = require("cors");
const { test } = require("../controllers/Authcontroller");
const { registerUser } = require("../controllers/Authcontroller");

// Middleware
router.use(
  cors({
    withCredentials: true,
    origin: "http://localhost:5173",
  })
);

router.get("/test", test);
router.post("/register", registerUser);

module.exports = router;
    