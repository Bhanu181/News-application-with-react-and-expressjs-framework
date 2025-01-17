const express = require("express");
const { fetchNews } = require("../controllers/newsController");
const router = express.Router();

router.get("/", fetchNews); // GET request for news

module.exports = router;
