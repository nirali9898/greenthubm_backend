const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    UserID: {
        type: Number,
        required: true,
        unique: true
    },
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        default: null
    },
    Phone: {
        type: String,
        required: true
    },
    UserType: {
        type: String,
        enum: ['Admin', 'Customer', 'Supplier'],
        required: true
    }


})

module.exports = mongoose.model("users",userSchema)
