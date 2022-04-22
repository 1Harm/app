const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.render(__dirname + "/views/log.ejs"))
    .post((req, res) => res.send("POST"));
module.exports = router;