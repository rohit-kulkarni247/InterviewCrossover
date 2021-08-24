import express from "express";

import { signup, login, getUsers } from "../controllers/auth.js";
import { getAllPosts, getUserPosts } from "../controllers/posts.js";

const router = express.Router();

//get methods
router.get("/getallusers", getUsers);
router.get("/getallposts", getAllPosts);

//post methods
router.post("/signup", signup);
router.post("/login", login);
router.post("/userpost", getUserPosts);

export default router;
