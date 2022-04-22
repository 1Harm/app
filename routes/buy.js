const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.send(__dirname + "/views/buy.ejs"))
    .post((req, res) => res.render(__dirname + "/views/buy.ejs"));
module.exports = router;