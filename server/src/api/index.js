import express from "express";

import posts from "./posts";

const router = express.Router();

router.use(function timelog(req, res, next) {
  console.log(`API access at ${Date.now()} from ${req.ip}`);
  next();
});

router.use("/posts", posts);

export default router;
