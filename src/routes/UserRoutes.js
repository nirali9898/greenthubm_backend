//router
const routes = require("express").Router()
//controller --> userController
const userController = require("../controllers/UserController")
routes.get("/user", userController.getUser) // New route for GET /user

routes.post("/user",userController.signup)
routes.get("/users",userController.getAllUsers)
routes.get("/user/:id",userController.getUserById)
routes.delete("/user/:id",userController.deleteUserById)
routes.post("/user/login",userController.loginUser)


module.exports = routes;

// New method to handle GET /user
