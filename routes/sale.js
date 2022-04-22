const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.render(__dirname + "/views/buy.ejs"))
    .post((req, res) => res.send("You bought"));
module.exports = router;