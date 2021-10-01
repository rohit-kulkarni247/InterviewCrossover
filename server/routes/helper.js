import express from "express";

import { signup, login, getUsers, getImage } from "../controllers/user.js";
import {
  getAllPosts,
  getUserPosts,
  getCompanyPosts,
} from "../controllers/posts.js";

import auth from "../middleware/auth.js";

const router = express.Router();

//get methods
router.get("/getallusers", getUsers);
router.get("/getallposts", getAllPosts);
router.get("/userpost", auth, getUserPosts);

//post methods
router.post("/signup", signup);
router.post("/login", login);
router.post("/companypost", getCompanyPosts);
router.post("/getimage", getImage);

export default router;
