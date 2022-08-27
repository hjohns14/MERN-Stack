const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/person", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connection established to the database"))
.catch((err) => console.log("Something went wrong with database connection", err))