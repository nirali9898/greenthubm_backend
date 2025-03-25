const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    CategoryID: {
        type: Number,
        required: true,
        unique: true
    },
    Name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        default: null
    }
});

module.exports = mongoose.model("categories", categorySchema);
