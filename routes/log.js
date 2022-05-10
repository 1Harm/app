const express = require("express");
const router = express.Router();
const {check} = require('express-validator')
const path = require("path");
const mongoose = require("mongoose");
let db = mongoose.connection;
const deleteCtrl = require('../controllers/delete')
const getUsersCtrl = require('../controllers/getUsers')
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("connection succeeded");
})
router.get('/log', (req,res) => res.render(path.resolve("routes/views/Register.ejs")))
router.post('/delete', deleteCtrl)
module.exports = router
