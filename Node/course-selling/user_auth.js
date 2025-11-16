require("dotenv").config();
const jwt=require('jsonwebtoken')

const JWT_SECRETD = process.env.JWT_SECRET_USER;

 function userAuth(req, res, next) {
  try {
    const token = req.headers.token;
    if (!token) {
      return res.status(403).json({
        message: "Token missing",
      });
    }
    const verifiedData =jwt.verify(token, JWT_SECRETD);

    req.userId = verifiedData.userId;
    next();
  } catch (err) {
    res.status(403).json({
      message: "Invalid or expried token",
    });
  }
}
module.exports=userAuth