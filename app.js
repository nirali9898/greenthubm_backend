const express = require("express") //express....
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
app.use(cors()) // *
app.use(express.json()) //to accept data as json...


//import role routes

const roleRoutes = require("./src/routes/RoleRoutes")
app.use(roleRoutes)

//user Routes
const userRoutes = require("./src/routes/UserRoutes")
app.use(userRoutes)

const stateRoutes = require("./src/routes/StateRoutes");
app.use("/state", stateRoutes); // http://localhost:3000/state/addState

const productRoutes = require("./src/routes/ProductRoutes");
app.use("/product", productRoutes); // http://localhost:3000/product/addproduct

const orderRoutes = require("./src/routes/OrderRoutes");
app.use("/order", orderRoutes); // http://localhost:3000/order/addorder

const orderDetailsRoutes = require("./src/routes/OrderDetailsRoutes");
app.use("/orderdetails", orderDetailsRoutes); // http://localhost:3000/orderdetails/addorderdetail

const reviewRoutes = require("./src/routes/ReviewRoutes");
app.use("/review", reviewRoutes); // http://localhost:3000/review/addreview

const supplierRoutes = require("./src/routes/SupplierRoutes");
app.use("/supplier", supplierRoutes); // http://localhost:3000/supplier/addsupplier
//http://localhost:3000/addState
//http://localhost:3000/state/addState

const cityRoutes = require("./src/routes/CityRoutes")
app.use("/city",cityRoutes) //http://localhost:3000/city/addCity

const areaRoutes = require("./src/routes/AreaRoutes")
app.use("/area",areaRoutes) //http://localhost:3000/area/add

const hordingRoutes = require("./src/routes/HordingRoutes")
app.use("/hording",hordingRoutes) //http://localhost:3000/hording/add


mongoose.connect("mongodb://localhost:27017/green_thumb").then(()=>{
    console.log("database connected....")
})


//server creation...
const PORT = 3000
app.listen(PORT,()=>{
    console.log("server started on port number ",PORT)
})
