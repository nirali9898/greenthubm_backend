const orderDetailsModel = require("../models/OrderDetailsModel");

const addOrderDetail = async (req, res) => {
    const { OrderDetailID, OrderID, ProductID, Quantity, Price } = req.body;

    const newOrderDetail = new orderDetailsModel({
        OrderDetailID,
        OrderID,
        ProductID,
        Quantity,
        Price
    });

    try {
        const savedOrderDetail = await newOrderDetail.save();
        res.status(201).json(savedOrderDetail);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllOrderDetails = async (req, res) => {
    const orderDetails = await orderDetailsModel.find().populate("OrderID").populate("ProductID");
    res.json({
        message: "Order details fetched successfully",
        data: orderDetails,
    });
};

const getOrderDetailById = async (req, res) => {
    const foundOrderDetail = await orderDetailsModel.findById(req.params.id).populate("OrderID").populate("ProductID");
    res.json({
        message: "Order detail fetched successfully",
        data: foundOrderDetail,
    });
};

const deleteOrderDetailById = async (req, res) => {
    const deletedOrderDetail = await orderDetailsModel.findByIdAndDelete(req.params.id);
    res.json({
        message: "Order detail deleted Successfully",
        data: deletedOrderDetail,
    });
};

module.exports = {
    addOrderDetail,
    getAllOrderDetails,
    getOrderDetailById,
    deleteOrderDetailById,
};
