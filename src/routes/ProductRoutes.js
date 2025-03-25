const routes = require('express').Router();
const productController = require('../controllers/ProductController');

routes.post("/addproduct", productController.addProduct);
routes.get("/getallproducts", productController.getAllProducts);

module.exports = routes;
