const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username: {
            type:String,
            required:true,
            unique:true
        },
        password: {
            type:String,
            required:true
        },
        accId: {
            type:Number,
            unique:true
        },
        balance: {
            type:Number
        },
        transactions: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Transaction"
        }]
    },
    {timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);