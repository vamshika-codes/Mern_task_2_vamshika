const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

function auth(req, res, next) {
  try {
    const authHeader = req.header("Authorization");

    if (!authHeader) {
      return res.status(401).json({ message: "Access denied. No token provided." });
    }

    // Remove "Bearer " prefix if it exists
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.slice(7)
      : authHeader;

    if (!token) {
      return res.status(401).json({ message: "Token missing" });
    }

    // Verify token
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    // Attach verified user info to request
    req.user = verified;

    next();
  } catch (err) {
    console.error("Auth Middleware Error:", err.message);
    res.status(401).json({ message: "Invalid or expired token" });
  }
}

module.exports = auth;
