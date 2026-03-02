//allow user to create an account or login on website

import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
//route for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User doesn't exists" });
    }

    const isMatched = await bcrypt.compare(password, user.password); //password we get from req body and password that is stored in db is compared

    if (isMatched) {
      const token = createToken(user._id);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//router for user registration
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // checking if user alreafy exists or not
    const exist = await userModel.findOne({ email });
    if (exist) {
      return res.json({ success: false, msg: "User already exists" });
    }
    //validate email format and strong password
    if (!validator.isEmail(email)) {
      return res.json({ success: false, msg: "Please enter a valid email" });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        msg: "Please enter a password with at least 8 characters",
      });
    }

    //hashing user password
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    //create user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save(); //save the new user in db

    //after we create user in db mongodb generates unique id for each user
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.error(error);
    res.json({ success: false, msg: error.message });
  }
};

//route for admin login
const adminLogin = async (req, res) => {};
export { loginUser, registerUser, adminLogin };
