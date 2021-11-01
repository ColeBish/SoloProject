const mongoose = require('mongoose');

const IdeaSchema = new mongoose.Schema({
    genra: {
        type: String,
        required: [true, "Genre is required"]
    },
    idea: {
        type: String,
        required: [true, "Idea is required"]
    }
}, { timestamps: true });

const Idea = mongoose.model('Idea', IdeaSchema);

module.exports = Idea;