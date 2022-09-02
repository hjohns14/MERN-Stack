const express = require("express")
const cors = require("cors")
const port = 9000
const app = express()

app.use(
    cors(),
    express.json(),
    express.urlencoded({extended:true})
)

require("./routes/author.routes")(app)
require("./config/mongoose.config")

app.listen(port, () => console.log(`Locked and Loaded on port ${port}`))