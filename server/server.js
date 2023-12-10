const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const authRouter = require("./routes/auth");
const authenticate = require("./middleware/authentication");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/auth", authRouter);
app.get("/page", authenticate, (req, res) => {
  res.json({
    status: "active",
    message: "running",
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: 200,
    message: "server is running",
  });
});

app.listen(process.env.PORT || 3000, () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() =>
      console.log(`Server is running on http://localhost:${process.env.PORT}`)
    )
    .catch((error) => console.log(error));
});
