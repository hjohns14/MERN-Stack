const mongoose = require("mongoose")

const JokeSchema = new mongoose.Schema({
    setup:{
        type: String,
        required: [true, "Setup for joke is required"],
        minlength: [3, "Setup must be at least 3 characters long"]
    },
    punchline:{
        type: String,
        required: [true, "Jokes need a punchline"],
        minlength: [1, "Cannot have no punchline"]
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

const Jokes = mongoose.model("Jokes", JokeSchema)

module.exports = Jokes