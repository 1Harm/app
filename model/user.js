var mongoose = require('mongoose');
var User = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        unique: true,
        required: true
    },
    phone: String,
});
var user = new mongoose.model('Harm', User);
module.exports = user;