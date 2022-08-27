const Person = require("../models/person.model")

module.exports.index = (req, res) =>{
    res.json({
        message: "Hello World"
    })
}

//C
module.exports.createPerson = (req, res) =>{
    Person.create(req.body)
    .then(person => res.json(person))
    .catch(err => res.json(err))
}


//R
module.exports.getAll = (req, res) =>{
    Person.find()
    .then(people => res.json({all_people: people}))
    .catch(err => res.json(err))
}

//U


//D