require("dotenv").config();
const jwt=require('jsonwebtoken')

const JWT_SECRETD = process.env.JWT_SECRET_ADMIN;

 function creatorAuth(req, res, next) {
  try {
    const token = req.headers.token;
    if (!token) {
      return res.status(403).json({
        message: "Token missing",
      });
    }
    const verifiedData =jwt.verify(token, JWT_SECRETD);

    req.creatorId = verifiedData.creatorId;
    next();
  } catch (err) {
    res.status(403).json({
      message: "Invalid or expried token",
    });
  }
}
module.exports=creatorAuth