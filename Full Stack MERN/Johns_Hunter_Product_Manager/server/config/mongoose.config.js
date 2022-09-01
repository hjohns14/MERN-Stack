const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/product_manager", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connection established to database"))
.catch((err) => console.log("Something went wrong with database connection", err))