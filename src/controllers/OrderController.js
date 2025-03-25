const orderModel = require("../models/OrderModel");

const placeOrder = async (req, res) => {
    const { OrderID, UserID, TotalAmount, PaymentStatus, ShippingAddress, Status } = req.body;

    const newOrder = new orderModel({
        OrderID,
        UserID,
        TotalAmount,
        PaymentStatus,
        ShippingAddress,
        Status
    });

    try {
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllOrders = async (req, res) => {
    const orders = await orderModel.find().populate("UserID");
    res.json({
        message: "Orders fetched successfully",
        data: orders,
    });
};

const getOrderById = async (req, res) => {
    const foundOrder = await orderModel.findById(req.params.id).populate("UserID");
    res.json({
        message: "Order fetched successfully",
        data: foundOrder,
    });
};

const deleteOrderById = async (req, res) => {
    const deletedOrder = await orderModel.findByIdAndDelete(req.params.id);
    res.json({
        message: "Order deleted Successfully",
        data: deletedOrder,
    });
};

module.exports = {
    placeOrder,
    getAllOrders,
    getOrderById,
    deleteOrderById,
};
