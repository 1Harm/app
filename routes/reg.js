const express = require("express");
const router = express.Router();
const app = express()
app.set('view engine','ejs')
router
    .route("/")
    .get((req, res) => res.render(__dirname + "./views/buy.ejs"))
    .post((req, res) => res.render("You registered"));
module.exports = router;