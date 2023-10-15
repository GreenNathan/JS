// ---- MODEL IN MUDULES----
//import mongoose to build the schema
const mongoose = require("mongoose");

// the rules the entires need to follow
const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title must be present"],
        minLength: [3, "Title must be 3 char long"]
    },
    price: {
        type: Number,
        required: [true, "please provide a number"],
        min: [.19, 'must be valid']
    },
    description: {
        type: String,
        required: [true, "Provide description"]
    }
}, { timestamps: true });

const Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;