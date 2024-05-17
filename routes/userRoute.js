import express from "express";

import {
  loginController,
  registerController,
} from "../controllers/userController.js";
//router object
const router = express.Router();
//routers
//post || login
router.post("/login", loginController);
//post || register
router.post("/register", registerController);
export default router;
