// ---- MODEL IN MUDULES----
//import mongoose to build the schema
const mongoose = require("mongoose");

// the rules the entires need to follow
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "must be a funny"],
        minLength: [3, "thats not very funny"]
    },
    punchLine: {
        type: String,
        required: [true, "HA that was good"],
        minLength: [3, "to short to be funny"]
    },
}, { timestamps: true });

const Joke = mongoose.model('Joke', JokeSchema);
module.exports = Joke;