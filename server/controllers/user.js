import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import fileUpload from "express-fileupload";
import {} from "dotenv/config";
import atob from "atob";

import InterviewCreator from "../models/user.js";

const router = express.Router();

const app = express();
app.use(fileUpload());

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

export const getImage = async (req, res) => {
  // console.log(req.headers);

  var base64Url = req.headers.authorization.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  let user = JSON.parse(jsonPayload);
  console.log(user.email);

  if (req.files === null) {
    return res.status(400).json({ msg: "No file was uploaded" });
  }
  const file = req.files.file;
  file.mv(`./public/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    // res.json({ fileName: file.name, filePath: `./public/${file.name}` });
  });
  InterviewCreator.findOneAndUpdate(
    { email: user.email },
    { imagePath: `./public/${file.name}` },
    function (err, doc) {
      if (err) return res.send(500, { error: err });
      return res.send("succesfully saved");
    }
  );
};

export const getUsers = async (req, res) => {
  const users = await InterviewCreator.find({}).exec();
  res.status(200).json(users);
};
