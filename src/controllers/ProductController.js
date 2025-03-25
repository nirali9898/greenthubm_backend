const productModel = require("../models/ProductModel");

const addProduct = async (req, res) => {
    const { ProductID, Name, Description, Price, Stock, CategoryID, Image, SupplierID } = req.body;

    const newProduct = new productModel({
        ProductID,
        Name,
        Description,
        Price,
        Stock,
        CategoryID,
        Image,
        SupplierID
    });

    try {
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllProducts = async (req, res) => {
    const products = await productModel.find();
    res.json({
        message: "Products fetched successfully",
        data: products,
    });
};

const getProductById = async (req, res) => {
    const foundProduct = await productModel.findById(req.params.id);
    res.json({
        message: "Product fetched successfully",
        data: foundProduct,
    });
};

const deleteProductById = async (req, res) => {
    const deletedProduct = await productModel.findByIdAndDelete(req.params.id);
    res.json({
        message: "Product deleted Successfully",
        data: deletedProduct,
    });
};

module.exports = {
    addProduct,
    getAllProducts,
    getProductById,
    deleteProductById,
};
