const routes = require('express').Router();
const orderDetailsController = require('../controllers/OrderDetailsController');

routes.post("/addorderdetail", orderDetailsController.addOrderDetail);
routes.get("/getalldetails", orderDetailsController.getAllOrderDetails);

module.exports = routes;
