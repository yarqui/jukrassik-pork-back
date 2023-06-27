import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("Route handler executed");
  res.send("here I am");
});

export default router;
