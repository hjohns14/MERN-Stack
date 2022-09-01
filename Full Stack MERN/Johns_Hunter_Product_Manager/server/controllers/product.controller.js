const Product = require("../models/product.model")

module.exports = {
    create: function(req, res) {
        Product.create(req.body)
        .then(product => res.json({newProduct:product}))
        .catch(err => res.json({message: "Something Went wrong", error: err}))
    },
    getAll: function(req, res) {
        Product.find()
        .then(products => res.json({allProducts: products}))
        .catch(err => res.json(err))
    },
    getById: function(req, res) {
        Product.find({_id: req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
    },
    update: function(req, res) {
        Product.findOneAndUpdate(req.body)
        .then(product => res.json({updatedProduct: product}))
        .catch(err => res.json(err))
    },
    destroy: function(req, res) {
        Product.findOneAndDelete({_id: req.params.id})
        .then(product => res.json({deletedProduct: product}))
        .catch(err => res.json(err))
    },
}
module.exports.index = (req, res) =>{
    res.json({
        message: "Hello World"
    })
}
