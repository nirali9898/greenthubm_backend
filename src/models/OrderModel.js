const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    OrderID: {
        type: Number,
        required: true,
        unique: true
    },
    UserID: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    OrderDate: {
        type: Date,
        default: Date.now
    },
    TotalAmount: {
        type: Schema.Types.Decimal128,
        required: true
    },
    PaymentStatus: {
        type: String,
        enum: ['Pending', 'Completed', 'Failed'],
        required: true
    },
    ShippingAddress: {
        type: String,
        required: true
    },
    Status: {
        type: String,
        enum: ['Processing', 'Shipped', 'Delivered', 'Cancelled'],
        required: true
    }
});

module.exports = mongoose.model("orders", orderSchema);
