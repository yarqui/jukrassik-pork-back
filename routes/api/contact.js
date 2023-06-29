import express from "express";
import sendLeadToEmail from "../../controllers/contact.js";
import formSchema from "../../schemas/formSchema.js";
import validateBody from "../../middlewares/validateBody.js";

const router = express.Router();

router.post("/", validateBody(formSchema), sendLeadToEmail);

export default router;
