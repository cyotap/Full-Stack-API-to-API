const express = require("express");
const router = express.Router();

const t = require("../controller/tweet.controller");

router.get("/data", async (req, res) => {
  const query = req.query;
  const limit = req.query.limit;

  const TweetData = await t(query, limit);
  res.send(TweetData);
});

module.exports = router;