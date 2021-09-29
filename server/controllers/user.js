import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import fileUpload from "express-fileupload";
import {} from "dotenv/config";

import InterviewCreator from "../models/user.js";

const router = express.Router();

export const signup = async (req, res) => {
  const { fullname, email, password } = req.body;
  const candidate = await InterviewCreator.findOne({ email });
  if (candidate) {
    return res.status(400).json({
      error: "User already exists",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 12);
  var reactuser = new InterviewCreator({
    fullname: fullname,
    email: email,
    password: hashedPassword,
  });
  try {
    await reactuser.save();
    const token = jwt.sign(
      {
        email: reactuser.email,
        fullname: reactuser.fullname,
        userId: reactuser._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.status(201).json({ reactuser, token });
  } catch (err) {
    res.sendStatus(500);
  }
};

export const login = async (req, res) => {
  const user = await InterviewCreator.findOne({
    email: req.body.email,
  });
  if (user) {
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (isMatch) {
      const token = jwt.sign(
        { email: user.email, fullname: user.fullname, id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      res.status(200).json({ user, token });
    } else {
      res.sendStatus(401);
    }
  } else {
    res.sendStatus(404);
  }
};

// export const getImage = async (req, res) => {
//   if (req.files === null) {
//     return res.status(400).json({ msg: "No file was uploaded" });
//   }
//   const file = req.files.file;
//   file.mv(`${__dirname}/server/public/${file.name}`, (err) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send(err);
//     }

//     res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
//   });
// };

export const getUsers = async (req, res) => {
  const users = await InterviewCreator.find({}).exec();
  res.status(200).json(users);
};
