const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  // Get token from header
  const token = req.header("jwt_token");

  // Check if not token
  if (!token) {
    return res.status(403).json({ msg: "authorization denied" });
  }

  // Verify user token
  try {
    const verify = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verify.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
