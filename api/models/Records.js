const mongoose = require('mongoose');

const RecordSchema = new mongoose.Schema(
    {
        type: {
            type:String,
            required: true,
            enum: [ 'deposit', 'wothdraw', 'transfer' ]
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        toUserId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        amount: {
            type: Number,
            required: true
        },
        timestamp: {
            type: Date,
            default: Date.now
        }
    },
);

module.exports = mongoose.model("Record", RecordSchema);