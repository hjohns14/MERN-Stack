const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/my_first_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Established a connection to the database!"))
.catch(err => console.log("Something Went wrong when connecting to the database", err))
