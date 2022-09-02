const Author = require("../models/authors.model")

module.exports ={
    create: function(req, res) {
        Author.create(req.body)
        .then(author => res.json({author:author}))
        .catch(err => res.status(400).json(err))
    },
    getAll: function(req, res) {
        Author.find()
        .then(authors => res.json({allAuthors: authors}))
        .catch(err => res.json(err))
    },
    getById: function(req, res) {
        Author.findOne({_id: req.params.id})
        .then(author => res.json({author: author}))
        .catch(err => res.status(400).json(err))
    },
    update: function(req, res) {
        Author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(author => res.json({updatedAuthor: author}))
        .catch(err => res.status(400).json(err))
    },
    destroy: function(req, res) {
        Author.findOneAndDelete({_id: req.params.id})
        .then(author => res.json({deletedAuthor: author}))
        .catch(err => res.json(err))
    },
}