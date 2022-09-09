const User = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const {secret, authenticate} = require("../config/jwt.config")
require('dotenv').config()

module.exports = {
    //Create used for  registration or testing
    create: function(req, res) {
        User.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.status(400).json({message: "Something Went wrong", error: err}))
    },
    getAll: function(req, res) {
        User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(err))
    },
    getById: function(req, res) {
        User.findOne({_id: req.params.id})
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err))
    },
    update: function(req, res) {
        User.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(user => res.json({updatedUser: user}))
        .catch(err => res.status(400).json(err))
    },
    destroy: function(req, res) {
        User.findOneAndDelete({_id: req.params.id})
        .then(user => res.json({deletedUser: user}))
        .catch(err => res.status(400).json(err))
    },
    register: (req, res) =>{
        User.create(req.body)
        .then( user =>{
            res.cookie("mycookie", "mydata", {httpOnly:true}).json({message:"This response has a cookie", user: user})
        })
        .catch(err => res.status(400).json(err))
    },
    login: async (req, res) =>{
        const user = await User.findOne({userName: req.body.userName})

        if (user === null){
            return res.sendStatus(401).json({message: "User Not Found"})
        }

        const correctPassword = await bcrypt.compare(req.body.password, user.password)

        if (!correctPassword){
            return res.sendStatus(401)
        }

        const userToken = jwt.sign({
            id: user._id
        }, process.env.SECRET_KEY)

        res
        .cookie('usertoken', userToken, secret, {
            httpOnly: true
        })
        .json({msg: "Success", id: user._id})
    },
    logout: (req, res) =>{
        res.clearCookie("usertoken")
        res.sendStatus(200)
    }


}
