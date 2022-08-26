const express = require("express")
const app = express()
const port = 9000

require("./config/mongoose.config")

app.use(express.json(), express.urlencoded( {extended:true} ))

const JokesRoutes = require("./routes/jokes.routes")
JokesRoutes(app)

app.listen(port, () => console.log(`Locked and loaded on port ${port}`))