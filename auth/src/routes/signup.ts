import express from "express";

const router = express.Router();

router.post("/signup", (req, res) => {
  res.send("Hi there!");
});

export default router;
