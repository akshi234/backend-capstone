const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../model/user");

dotenv.config();

const authenticateUser = async (req, res, next) => {
  const { jwttoken } = req.headers;
  try {
    const { email } = await jwt.verify(jwttoken, process.env.JWT_SECRET);

    const user = await User.findOne({ email });
    req.user = user;
    if (user) {
      next();
    } else {
      res.status(400).json({
        message: "user not found.",
      });
    }
  } catch (e) {
    return next(e);
  }
};

module.exports = { authenticateUser };
