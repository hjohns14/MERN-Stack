const express = require("express")
const cors = require("cors")
const app = express()
const port = 9000


app.use(
    cors(),
    express.json(),
    express.urlencoded({extended:true})
)


require("./routes/user.routes")(app)
require("./config/mongoose.config")
require("dotenv").config()

//console.log(process.env.FIRST_SECRET_KEY)
const secretKey = process.env.FIRST_SECRET_KEY

app.listen(port, () => console.log(`Locked and loaded on port ${port}`))