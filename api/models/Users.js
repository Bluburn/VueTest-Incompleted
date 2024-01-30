mongoose = require('mongoose');

const User = new mongoose.Schema({
        username: {
            type: String,
            required: true,
            unique: true,
          },
          password: {
            type: String,
            required: true,
            unique: true,
          },
          balance: {
            type: Number,
            required: true,
          }
    });