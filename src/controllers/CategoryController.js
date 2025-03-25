const categoryModel = require("../models/CategoryModel");

const addCategory = async (req, res) => {
    const { CategoryID, Name, Description } = req.body;

    const newCategory = new categoryModel({
        CategoryID,
        Name,
        Description
    });

    try {
        const savedCategory = await newCategory.save();
        res.status(201).json(savedCategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllCategories = async (req, res) => {
    const categories = await categoryModel.find();
    res.json({
        message: "Categories fetched successfully",
        data: categories,
    });
};

const getCategoryById = async (req, res) => {
    const foundCategory = await categoryModel.findById(req.params.id);
    res.json({
        message: "Category fetched successfully",
        data: foundCategory,
    });
};

const deleteCategoryById = async (req, res) => {
    const deletedCategory = await categoryModel.findByIdAndDelete(req.params.id);
    res.json({
        message: "Category deleted Successfully",
        data: deletedCategory,
    });
};

module.exports = {
    addCategory,
    getAllCategories,
    getCategoryById,
    deleteCategoryById,
};
