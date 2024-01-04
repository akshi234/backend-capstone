const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

// const authorization = (req, res, next) => {
//   const { jwttoken } = req.headers;

//   if (!jwttoken) {
//     return res.status(400).json({ message: "unauthorized: Token missing" });
//   }
//   try {
//     const user = jwt.verify(jwttoken, process.env.JWT_SECRET);
//     req.user = user;
//     next();
//   } catch (error) {
//     return res
//       .status(400)
//       .json({ message: "Unauthorized: Invalid token", error: error.message });
//   }
// };

const authorization = (req, res, next) => {
  console.log(req.headers);
  const { token } = req.headers;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: Token missing" });
  }

  // const token = req.headers.authorization.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token Payload:", decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("JWT Verification Error:", error);
    return res
      .status(401)
      .json({ message: "Unauthorized: Invalid token", error: error.message });
  }
};
module.exports = authorization;
