const  express = require('express')
const app = express()
const port = 7777
app.set('view engine','ejs')
app.use("/", require("./root"));
app.use("/register", require("./register"));
app.use("/tours", require("./tours"));
app.use("/service", require("./service"));
app.use("/contacts", require("./contacts"));
app.use("/first_pizza",require("./first_pizza"));
app.use("/second_pizza",require("./second_pizza"));
app.use("/buy",require("./buy"));
app.use("/third_pizza",require("./third_pizza"));
app.use("/fourth_pizza",require("./fourth_pizza"));
app.use("/fifth_pizza",require("./fifth_pizza"));
app.use("/sixth_pizza",require("./sixth_pizza"));
app.use("/sale",require("./sale"));
app.use("/reg",require("./reg"));
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
app.use("/", require("./log"))
app.use("/register", require('./log'))

app.post('/sign_up', function(req,res) {
    var name = req.body.name;
    var email = req.body.email;
    var pass = req.body.password;
    var phone = req.body.phone;

    var data = {
        "name": name,
        "email": email,
        "password": pass,
        "phone": phone
    }
    db.collection('Harm').insertOne(data, function (err, collection) {
        if (err) throw err;
        console.log("Record inserted Successfully");

    });
    console.log("server listening at port 7777");
})

