const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/jokes_api",
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("We connected baby"))
.catch(err => console.log("Error connecting to server: \n", err))