import express from "express";

import { signup, login, getUsers } from "../controllers/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/getallusers", getUsers);

export default router;
