const mongoose = require("mongoose")
const dbName = "example" /// ENTER THE DB NAME

mongoose.connect("mongodb://localhost/" + dbName, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connection established to database"))
.catch((err) => console.log("Something went wrong with database connection", err))