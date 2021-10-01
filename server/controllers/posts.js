import express from "express";
import mongoose from "mongoose";

import InterviewCreator from "../models/user.js";
import Experience from "../models/post.js";

const router = express.Router();

export const getAllPosts = async (req, res) => {
  const data = await Experience.find({}).exec();
  res.status(200).json(data);
};

export const getUserPosts = async (req, res) => {
  // console.log(req.userId);
  if (!req.userId) {
    res.status(401).json({
      message: "Unauthorized",
    });
  }

  const user = await InterviewCreator.findOne({
    email: req.userId.email,
  }).exec();
  const data = await Experience.find({ userEmail: user.email }).exec();
  try {
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getCompanyPosts = async (req, res) => {
  const data = await Experience.find({
    _id: req.body.companyId,
  }).exec();
  try {
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};
