const supplierModel = require("../models/SupplierModel");

const addSupplier = async (req, res) => {
    const { SupplierID, Name, ContactPerson, Email, Phone, Address } = req.body;

    const newSupplier = new supplierModel({
        SupplierID,
        Name,
        ContactPerson,
        Email,
        Phone,
        Address
    });

    try {
        const savedSupplier = await newSupplier.save();
        res.status(201).json(savedSupplier);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllSuppliers = async (req, res) => {
    const suppliers = await supplierModel.find();
    res.json({
        message: "Suppliers fetched successfully",
        data: suppliers,
    });
};

const getSupplierById = async (req, res) => {
    const foundSupplier = await supplierModel.findById(req.params.id);
    res.json({
        message: "Supplier fetched successfully",
        data: foundSupplier,
    });
};

const deleteSupplierById = async (req, res) => {
    const deletedSupplier = await supplierModel.findByIdAndDelete(req.params.id);
    res.json({
        message: "Supplier deleted Successfully",
        data: deletedSupplier,
    });
};

module.exports = {
    addSupplier,
    getAllSuppliers,
    getSupplierById,
    deleteSupplierById,
};
