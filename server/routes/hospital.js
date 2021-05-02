import express from "express";
import { check } from "express-validator";

const router = express.Router();

import auth from "../middleware/auth.js";
import { getHosps, addHosp } from "../controllers/hospitalController.js";

// @route    GET api/hospital
// @desc     Add hospital for user
// @access   Private
router.get("/", getHosps);

// @route    POST api/hospital
// @desc     Add hospital for user
// @access   Private
router.post("/", auth, addHosp);

export default router;
