const  express = require('express')
const app = express()
const port = 7777
app.set('view engine','ejs')
app.use("/", require("./routes/root"));
app.use("/register", require("./routes/register"));
app.use("/log", require("./routes/log"));
app.use("/tours", require("./routes/tours"));
app.use("/service", require("./routes/service"));
app.use("/contacts", require("./routes/contacts"));
app.use("/first_pizza",require("./routes/first_pizza"));
app.use("/second_pizza",require("./routes/second_pizza"));
app.use("/buy",require("./routes/buy"));
app.use("/third_pizza",require("./routes/third_pizza"));
app.use("/fourth_pizza",require("./routes/fourth_pizza"));
app.use("/fifth_pizza",require("./routes/fifth_pizza"));
app.use("/sixth_pizza",require("./routes/sixth_pizza"));
app.use("/sale",require("./routes/sale"));
app.use("/reg",require("./routes/reg"));
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);

const bodyParser = require("body-parser");

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://1Harm:EsOd9029@cluster0.7hrdf.mongodb.net/Signin');
let db = mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("connection succeeded");
})
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
module.exports = mongoose => {
    const Tutorial = mongoose.model(
        "tutorial",
        mongoose.data(
            { email: {
        type: String,
            required: true,
            unique: true
    },
    name: {
        type: String,
    default: ''
    },
    pass: {
        type: String,
    default: ''
    },
    phone: String, }
        )
    );
    return Tutorial;
};
app.post('/sign_up', function(req,res){
    let name = req.body.name;
    let email = req.body.email;
    let pass = req.body.password;
    let phone = req.body.phone;

    let Data =mongoose.data({
        email: {
            type: String,
            required: true,
            unique: true
        },
        name: {
            type: String,
            default: ''
        },
        pass: {
            type: String,
            default: ''
        },
        phone: String,
    });

    db.collection('Harm').insertOne(Data,function(err, collection){
        if (err) throw err;
        console.log("Record inserted Successfully");

    });

    return res.redirect('Register.ejs');
})
app.get('/',function(req,res){
    res.set({
        'Access-control-Allow-Origin': '*'
    });
    return res.redirect('Register.ejs');
}).listen(3000)

console.log("server listening at port 7777");
const db = require("../models");
const Tutorial = db.tutorials;
const UserModel = require('../model/user')
// Create and Save a new user
exports.create = async (req, res) => {
    if (!req.body.email && !req.body.firstName && !req.body.lastName && !req.body.phone) {
        res.status(400).send({ message: "Content can not be empty!" });
    }

    const user = new UserModel({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone
    });

    await user.save().then(data => {
        res.send({
            message:"User created successfully!!",
            user:data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating user"
        });
    });
};
// Retrieve all users from the database.
exports.findAll = async (req, res) => {
    try {
        const user = await UserModel.find();
        res.status(200).json(user);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};
// Find a single User with an id
exports.findOne = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        res.status(200).json(user);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
};
// Update a user by the id in the request
exports.update = async (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    await UserModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `User not found.`
            });
        }else{
            res.send({ message: "User updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};
// Delete a user with the specified id in the request
exports.destroy = async (req, res) => {
    await UserModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
            res.status(404).send({
                message: `User not found.`
            });
        } else {
            res.send({
                message: "User deleted successfully!"
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};
// Create and Save a new Tutorial
exports.create = (req, res) => {

};
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {

};
// Find a single Tutorial with an id
exports.findOne = (req, res) => {

};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {

};