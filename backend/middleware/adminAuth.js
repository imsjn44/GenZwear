// middleware for those api we need admin permission

import jwt from "jsonwebtoken";
const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers; //need to add token in req headers that we got after adminlogin

    if (!token) {
      return res.json({ success: false, message: "Not authorized" });
    }
    //decoding token if available
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    if (token_decode.role !== "admin") {
      return res.json({
        success: false,
        message: "Not authorized Login again",
      });
    }
    next(); //callback fn
  } catch (error) {
    console.error(error);
    res.json({ success: false, msg: error.message });
  }
};

export default adminAuth;
