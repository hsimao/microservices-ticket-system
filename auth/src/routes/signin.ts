import express from "express";

const router = express.Router();

router.post("/signin", (req, res) => {
  res.send("Hi there!");
});

export default router;
