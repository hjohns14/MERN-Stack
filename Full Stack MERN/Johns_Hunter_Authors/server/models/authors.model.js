const { model } = require("mongoose")
const mongoose = require("mongoose")


const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Author name is required"],
        minLength: [3, "Author Name must be at least 3 characters long"],
        maxLength: [60, "No way that is a real name"],
        trim: true
    }
}, {timestamps:true})

module.exports = mongoose.model("Author", AuthorSchema)

