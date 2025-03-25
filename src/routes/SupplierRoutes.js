const routes = require('express').Router();
const supplierController = require('../controllers/SupplierController');

routes.post("/addsupplier", supplierController.addSupplier);
routes.get("/getsuppliers", supplierController.getAllSuppliers);

module.exports = routes;
