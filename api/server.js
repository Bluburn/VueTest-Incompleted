const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());


mongoose.connect("mongodb://localhost:27017")

    .then(console.log("Connected to MongoDB"))
    .catch((err=cl) => console.log(err));

app.listen("8000", () => {
    console.log("DB is running");
});