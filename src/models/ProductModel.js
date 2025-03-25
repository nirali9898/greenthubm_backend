const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    ProductID: {
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
    },
    Price: {
        type: Schema.Types.Decimal128,
        required: true
    },
    Stock: {
        type: Number,
        required: true
    },
    CategoryID: {
        type: Schema.Types.ObjectId,
        ref: "categories"
    },
    Image: {
        type: String,
        default: null
    },
    SupplierID: {
        type: Schema.Types.ObjectId,
        ref: "suppliers"
    }
});

module.exports = mongoose.model("products", productSchema);
