import express from "express";
import { check } from "express-validator";

import { authUser } from "../controllers/authController.js";

const router = express.Router();

// @route    POST api/auth
// @desc     Authenticate user
// @access   Public
router.post(
  "/",
  [
    check("email", "Please enter a valid email").not().isEmpty().isEmail(),
    check("password", "Password is required").exists(),
  ],
  authUser
);

export default router;
