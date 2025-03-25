const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderDetailsSchema = new Schema({
    OrderDetailID: {
        type: Number,
        required: true,
        unique: true
    },
    OrderID: {
        type: Schema.Types.ObjectId,
        ref: "orders",
        required: true
    },
    ProductID: {
        type: Schema.Types.ObjectId,
        ref: "products",
        required: true
    },
    Quantity: {
        type: Number,
        required: true
    },
    Price: {
        type: Schema.Types.Decimal128,
        required: true
    }
});

module.exports = mongoose.model("orderDetails", orderDetailsSchema);
