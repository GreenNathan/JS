// -----CONTROLLER----
// controllers do crud for datd base
//import the model here
const Joke = require("../models/Joke.model");

// READ ALL
module.exports.readAll = (req, res) => {
    Joke.find()
        .then(allJokes => {
            res.json(allJokes);
        })
        .catch(err => {
            res.json(err);
        });
};

// readOne
module.exports.readOne = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneJoke => {
            res.json(oneJoke);
        })
        .catch((err) => {
            res.json(err);
        });
};

// create movie
module.exports.create = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => {
            res.json(newJoke);
        })
        .catch((err) => {
            res.json(err);
        });
};

//update
module.exports.update = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => {
            res.json(updatedJoke);
        })
        .catch((err) => {
            res.json(err);
        });
};

//delete
module.exports.delete = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result });
        })
        .catch((err) => {
            res.json(err);
        });
};