const jwt = require("jsonwebtoken");
const User = require("../Models/UseModel");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //   console.log(req.headers.authorization);
      token = req.headers.authorization.split(" ")[1];

      //decodes token id
      console.log(jwt.decode(token));

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //   console.log(decoded);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protect };
