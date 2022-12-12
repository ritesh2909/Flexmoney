const express = require("express");
const mongoose = require('mongoose');
const userRoute = require("./routes/user");
var cors = require('cors')

const app = express();


app.use(express.json());
app.use(cors());


mongoose.connect("mongodb+srv://ritesh:ritesh@cluster0.eeqra7g.mongodb.net/?retryWrites=true&w=majority")
    .then(console.log("connected to DB"))
    .catch((err) => console.log(err));


app.use("/api", userRoute);


app.listen("8000", () => {
    console.log("server started");
})