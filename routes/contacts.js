const express = require("express");
const router = express.Router();
const app = express()
app.set('view engine','ejs')
router
    .route("/")
    .get((req, res) => res.render(__dirname + "/views/Contacts.ejs"))
    .post((req, res) => res.render("POST"));
module.exports = router;