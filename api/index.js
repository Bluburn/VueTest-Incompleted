const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const dotenv = require("dotenv");
const cors = require('cors');
const app = express();
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const { deposit, withdraw, transfer, getUserTransactions } = require('./controller/recordControl.js');

//Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
require('dotenv').config();  

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: false
})
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));   


//Routes
app.use("/auth", authRoute);

app.listen("5000", () => {
    console.log("Backend is running");
});