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
