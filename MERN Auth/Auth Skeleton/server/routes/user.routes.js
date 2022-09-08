const UserController = require("../controllers/user.controller")

module.exports = (app) =>{
    app.get("/api/users", UserController.getAll)
    app.get("/api/users/:id", UserController.getById)
    app.post("/api/users", UserController.create)
    app.put("/api/users/:id", UserController.update)
    app.delete("/api/users/:id", UserController.destroy)
}