import User from "../models/Users.model.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
// import { use } from "react";
dotenv.config();

export const register = async (req, res) => {
  try {
    const { fullname, email, password, dob } = req.body;
    if (!fullname || !email || !password) {
      return res.json({
        status: 400,
        code: "MISSING_FIELDS",
        msg: "Username and password are required",
      });
    }
    const isUser = await User.findOne({ email });
    if (isUser) {
      return res.json({
        status: 400,
        code: "USER_ALREADY_EXISTS",
        msg: "User already registered. Try logging in instead.",
      });
    }

    const hashPassword = await bcrypt.hash(password, 8);

    const newUser = await User({
      fullname,
      email,
      dob,
      password: hashPassword,
    });
    await newUser.save();

    res.json({
      status: 200,
      code: "REGISTERED_SUCCESSFULLY",
      msg: "Registered successfully",
    });
  } catch (err) {
    res.json({ status: 500, error: err.message });
  }
};

// login middleware
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({
        status: 400,
        msg: "Username and password are required",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        code: 400,
        status: "failed",
        message: "Invalid username or password",
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.json({
        code: 500,
        status: "failed",
        message: "Invalid username or password",
      });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token_token", token, {
      httpOnly: true,
      secure: false, // set true in production
      sameSite: "Lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: "/",
    });

    res.json({
      code: 200,
      status: "success",
      message: "Login successful",
      user,
    });
  } catch (err) {
    res.json({ status: 500, error: err.message });
  }
};

//Authorize user
export const verifyToken = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: 401, msg: "cookie not found! access denied" });
  }
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
    console.log("verified");
  } catch (err) {
    res.json({
      status: 403,
      msg: "invalid and expried token",
      error: err.message,
    });
  }
};

export const logout = async (req, res) => {
  console.log("Logout");
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
      path: "/",
    });
    res.json({
      status: 200,
      code: "LOGOUT_SUCCESSFULLY",
      msg: "Logout successfully",
    });
  } catch (err) {
    res.json({
      status: 500,
      msg: "invalid and expried token",
      error: err.message,
    });
  }
};

export const forgetPassword = async (req, res) => {
  console.log("forget password");
  try {
    // const token = req.cookies.token_token;
    const id = req.userId;
    const { password, new_password } = req.body;
    if (!password || !new_password) {
      return res.json({
        code: 500,
        status: "unseccess",
        message: "input required",
      });
    }

    const user = await User.findById(decode.userId).select("password");
    if (!user)
      return res.json({
        code: 400,
        status: "unseccess",
        message: "user not found",
      });

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword)
      return res.json({
        code: 201,
        status: "unsuccess",
        message: "wrong password",
      });

    user.password = await bcrypt.hash(new_password, 8);
    await user.save();

    res.json({
      code: 200,
      status: "success",
      message: "password forgetted",
    });
  } catch (err) {
    res.json({
      status: 500,
      msg: "something went worng",
      error: err.message,
    });
  }
};
