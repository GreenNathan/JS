// -----CONTROLLER----
// controllers do crud for datd base
//import the model here
const Product = require("../models/product.model");

// READ ALL
module.exports.readAll = (req, res) => {
    Product.find()
        .then(allProducts => {
            res.json(allProducts);
        })
        .catch(err => {
            res.json(err);
        });
};

// readOne
module.exports.readOne = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneProduct => {
            res.json(oneProduct);
        })
        .catch((err) => {
            res.json(err);
        });
};

// create movie
module.exports.create = (req, res) => {
    Product.create(req.body)
        .then(newProduct => {
            res.json(newProduct);
        })
        .catch((err) => {
            res.json(err);
        });
};

//update
module.exports.update = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => {
            res.json(updatedProduct);
        })
        .catch((err) => {
            res.json(err);
        });
};

//delete
module.exports.delete = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result });
        })
        .catch((err) => {
            res.json(err);
        });
};