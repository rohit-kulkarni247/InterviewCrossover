import express from "express";

import { signup, login, getUsers } from "../controllers/auth.js";

const router = express.Router();

//get methods
router.get("/getallusers", getUsers);

//post methods
router.post("/signup", signup);
router.post("/login", login);

export default router;
