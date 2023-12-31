const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const authorization = (req, res, next) => {
  console.log("Request Headers:", req.headers);
  const { jwttoken } = req.headers;

  console.log("Received JWT Token:", jwttoken);
  if (!jwttoken) {
    return res.status(401).json({ message: "unauthorized: Token missing" });
  }
  try {
    console.log("Before Token Verification:", jwttoken);
    const user = jwt.verify(jwttoken, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (error) {
    console.error("JWT Verification Error:", error);
    return res.status(408).json({ message: "unauthorized user" });
  }
};

module.exports = authorization;
