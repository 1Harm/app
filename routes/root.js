const express = require("express");
const app = express()
const router = express.Router();

app.set('view engine','ejs')
router

    .route("/")
    .get((req, res) => res.render(__dirname + "/views/Index.ejs"))
    .post((req, res) => res.render("POST"));
module.exports = router;