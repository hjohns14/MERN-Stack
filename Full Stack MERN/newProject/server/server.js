const express = require("express")
const cors = require("cors")
const app = express()
const port = 9000
app.use(
    cors(), 
    express.json(), 
    express.urlencoded({extended:true})
)


// Longform way of doing this
// const personRoutes = require("./routes/person.routes")
// personRoutes(app)

// Short way
require("./routes/person.routes")(app)
require('./config/mongoose.config')

app.listen(port, () => console.log(`Locked and loaded on port ${port}`))