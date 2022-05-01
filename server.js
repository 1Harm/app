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

app.post('/sign_up', function(req,res){
    let name = req.body.name;
    let email = req.body.email;
    let pass = req.body.password;
    let phone = req.body.phone;

    let data = {
        "name": name,
        "email": email,
        "password": pass,
        "phone": phone
    };
    db.collection('Harm').insertOne(data,function(err, collection){
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