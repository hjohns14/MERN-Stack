const User = require("../models/user.model")

module.exports.findAllUsers = (req, res) =>{
    User.find()
    .then((allUsers) =>{
        res.json({users: allUsers})
    })
    .catch(err => {
        res.json({message: "Something Went wrong.", error: err})
    })
}
module.exports.findOneUser = (req, res) =>{
    User.find({_id: req.params.id})
    .then((oneUser) =>{
        res.json({users: oneUser})
    })
    .catch(err => {
        res.json({message: "Something Went wrong.", error: err})
    })
}

module.exports.createNewUser = (req, res) =>{
    User.create(req.body)
    .then((newUser) =>{
        res.json({user: newUser})
    })
    .catch(err => {
        res.json({message: "Something Went wrong.", error: err})
    })
}

module.exports.updateExistingUser = (req, res) =>{
    User.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
    .then((updatedUser) =>{
        res.json({user: updatedUser})
    })
    .catch(err => {
        res.json({message: "Something Went wrong.", error: err})
    })
}

module.exports.deleteOneUser = (req, res) =>{
    // findOneAndDelete returns the deleted item
    User.findOneAndDelete({_id: req.params.id})
    .then((result) =>{
        res.json({message: "This user has been removed", user: result})
    })
    .catch(err => {
        res.json({message: "Something Went wrong.", error: err})
    })
}