const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");

//db connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  })
  .then(() => console.log("connected to DB"))
  .catch((err) => console.error("error connecting to DB", err));

//middlewares
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    withCredentials: true,
  })
);

app.get("/", require("./routes/Authroutes"));

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("listening on port: " + port);
});
