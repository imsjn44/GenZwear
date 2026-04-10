//allow user to create an account or login on website

import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
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
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign({ email, role: "admin" }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credential" });
    }
  } catch (error) {
    console.error(error);
    res.json({ success: false, msg: error.message });
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    // Create a one-time reset token valid for 15 mins
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "15m",
    });

    // Configuration for Nodemailer (Example: Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password Reset Link",
      text: `Click here to reset your password: ${process.env.FRONTEND_URL}/reset-password/${token}`,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Reset link sent!" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    if (!token || !newPassword) {
      return res.json({ success: false, message: "All fields are required" });
    }

    // 1. Verify the token sent in the email
    // It must be the same JWT_SECRET used in forgotPassword
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 2. Hash the new password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // 3. Update user in DB based on the ID from the token
    const user = await userModel.findByIdAndUpdate(decoded.id, {
      password: hashedPassword,
    });

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    res.json({ success: true, message: "Password reset successfully!" });
  } catch (error) {
    console.error(error);
    // Error here usually means the token expired or was tampered with
    res.json({ success: false, message: "Link expired or invalid token" });
  }
};

export { loginUser, registerUser, adminLogin, forgotPassword, resetPassword };
