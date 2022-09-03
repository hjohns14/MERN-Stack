const PlayerController = require("../controllers/players.controller")

module.exports = (app) =>{
    app.get("/api/players", PlayerController.getAll)
    app.get("/api/players/:id", PlayerController.getById)
    app.post("/api/players", PlayerController.create)
    app.put("/api/players/:id", PlayerController.update)
    app.delete("/api/players/:id", PlayerController.destroy)
}