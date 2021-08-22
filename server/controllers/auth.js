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

export const login = async (req, res) => {
  const user = await InterviewCreator.findOne({
    email: req.body.email,
  });
  if (user) {
    if (user.password === req.body.password) {
      res.status(200).json(user);
    } else {
      res.sendStatus(401);
    }
  } else {
    res.sendStatus(404);
  }
};

export const getUsers = async (req, res) => {
  const users = await InterviewCreator.find({}).exec();
  res.status(200).json(users);
};
