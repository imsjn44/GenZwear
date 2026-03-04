//authenticate user whernever user add product cart or update cart or place the order

import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({ success: false, message: "NOt authorized Login Again" });
  }
  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id; //req body  ma token bata decode bhako user id lai rakhne
    next(); // moves to the next middleware or controller.
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
