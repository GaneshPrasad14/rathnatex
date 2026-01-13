const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    image: {
        type: String, // Store URL or path
        required: false
    },
    description: {
        type: String,
        required: false
    }
}, { timestamps: true });

module.exports = mongoose.model('Category', categorySchema);
