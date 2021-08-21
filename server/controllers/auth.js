import express from "express";
import mongoose from "mongoose";

import InterviewCreator from "../models/user.js";

const router = express.Router();

export const signup = async (req, res) => {
  var reactuser = new InterviewCreator({
    fullname: req.body.fullname,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    await reactuser.save();
    res.status(201).json(reactuser);
  } catch (err) {
    res.sendStatus(500);
  }
};
