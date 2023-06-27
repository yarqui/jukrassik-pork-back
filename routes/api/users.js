import express from "express";
import sendLeadToEmail from "../../controllers/users.js";

const router = express.Router();

router.post("/", sendLeadToEmail);

export default router;
