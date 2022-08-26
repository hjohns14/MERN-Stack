const express = require("express")
const app = express()
const port = 8000

require("./config/mongoose.config")

app.use(express.json(), express.urlencoded({extended:true}))

const UserRoutes = require("./routes/user.routes")
UserRoutes(app)

app.listen(port, ()=> console.log(`Locked and loaded on port ${port}`))