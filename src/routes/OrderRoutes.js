const routes = require('express').Router();
const orderController = require('../controllers/OrderController');

routes.post("/addorder", orderController.placeOrder);
routes.get("/getallorders", orderController.getAllOrders);

module.exports = routes;
