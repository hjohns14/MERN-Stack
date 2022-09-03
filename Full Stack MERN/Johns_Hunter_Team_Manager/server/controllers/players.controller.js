const Player = require("../models/players.model")

module.exports ={
    create: function(req, res) {
        Player.create(req.body)
        .then(player => res.json({player:player}))
        .catch(err => res.status(400).json(err))
    },
    getAll: function(req, res) {
        Player.find()
        .then(players => res.json({allPlayers: players}))
        .catch(err => res.json(err))
    },
    getById: function(req, res) {
        Player.findOne({_id: req.params.id})
        .then(player => res.json({player: player}))
        .catch(err => res.status(400).json(err))
    },
    update: function(req, res) {
        Player.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(player => res.json({updatedPlayer: player}))
        .catch(err => res.status(400).json(err))
    },
    destroy: function(req, res) {
        Player.findOneAndDelete({_id: req.params.id})
        .then(player => res.json({deletedPlayer: player}))
        .catch(err => res.json(err))
    },
}