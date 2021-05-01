import express from "express";
import { check } from "express-validator";

import { createUser } from "../controllers/userController.js";

const router = express.Router();

// @route    POST api/user
// @desc     Create user
// @access   Private
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please input a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  createUser
);

export default router;
