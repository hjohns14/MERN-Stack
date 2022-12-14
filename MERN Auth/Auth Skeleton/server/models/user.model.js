const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "User Name is required"],
        minLength: [5, "Username must be at least 5 characters"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate:{
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid Email"
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [8, "Password must be at least 8 characters"]
    },
    

}, {timestamps: true})

UserSchema.virtual("confirmPassword")
.get(() => this._confirmPassword)
.set( value => this._confirmPassword = value )

UserSchema.pre("validate", function(next){
    if (this.password !== this.confirmPassword){
        this.invalidate('confirmPassword', "Passwords must match")
    }
    next()
})

UserSchema.pre("save", function(next){
    bcrypt.hash(this.password, 10)
    .then(hash =>{
        this.password = hash
        next()
    })
})

module.exports = mongoose.model("User", UserSchema)


