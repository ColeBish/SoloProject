const mongoose = require('mongoose');

const IdeaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"]
    },
    genra: {
        type: String,
        required: [true, "Genre is required!"]
    },
    idea: {
        type: String,
        required: [true, "Idea is required!"]
    },
    likes: {
        type: Number
    }
}, { timestamps: true });

const Idea = mongoose.model('Idea', IdeaSchema);

module.exports = Idea;