const { model } = require("mongoose")
const mongoose = require("mongoose")


const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Player Name is required"],
        minLength: [3, "Player must be at least 3 characters long"],
        maxLength: [60, "No way that is a real name"],
        trim: true
    },
    position: {
        type: String,
        required: [true, "Position is required"],
        trim: true
    }, 
    status:{
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Playing"

    }
}, {timestamps:true})

module.exports = mongoose.model("Players", PlayerSchema)

