import express from "express";

import { signup, login, getUsers } from "../controllers/user.js";
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

//post methods
router.post("/signup", signup);
router.post("/login", login);
router.post("/userpost", auth, getUserPosts);
router.post("/companypost", getCompanyPosts);

export default router;
