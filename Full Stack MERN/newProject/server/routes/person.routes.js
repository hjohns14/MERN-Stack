const PersonController = require("../controllers/person.controller")

module.exports = (app) =>{
    app.get("/api", PersonController.index)
    app.get("/api/persons", PersonController.getAll)
    app.post("/api/persons", PersonController.createPerson)
}