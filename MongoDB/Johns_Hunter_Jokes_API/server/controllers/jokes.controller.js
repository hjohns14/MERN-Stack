const Jokes = require("../models/jokes.model")

module.exports.getAll = (req, res) =>{
    Jokes.find()
    .then(allJokes =>{
        res.json({jokes: allJokes})
    })
    .catch(err => {
        res.json({message: "Something Went wrong.", error: err})
    })
}

module.exports.getOne = (req, res) =>{
    Jokes.find({_id: req.params.id})
    .then(joke =>{
        res.json({joke: joke})
    })
    .catch(err => {
        res.json({message: "Something Went wrong.", error: err})
    })
}

module.exports.createOne = (req, res) =>{
    Jokes.create(req.body)
    .then(newJoke =>{
        res.json({joke: newJoke})
    })
    .catch(err => {
        res.json({message: "Something Went wrong.", error: err})
    })
}

module.exports.updateJoke = (req, res) =>{
    Jokes.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
        )
    .then(joke =>{
        res.json({joke: joke})
    })
    .catch(err => {
        res.json({message: "Something Went wrong.", error: err})
    })
}

module.exports.deleteJoke = (req, res) =>{
    Jokes.findOneAndDelete({_id: req.params.id})
    .then(joke =>{
        res.json({message: "This Joke has been removed", joke: joke})
    })
    .catch(err => {
        res.json({message: "Something Went wrong.", error: err})
    })
}