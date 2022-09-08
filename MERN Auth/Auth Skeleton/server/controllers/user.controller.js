const User = require("../models/user.model")

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
            res.json({msg: "Success", user: user})
        })
        .catch(err => res.json(err))
    },
    login: (req, res) =>{
        
    }
}
