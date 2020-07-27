const mongoose = require('mongoose');
const Schema = mongoose.Schema

// Create Schema
const postSchema = new Schema({
    title:  { type: String, required: true },
    summary: { type: String },
    post:  { type: String, required: true },
    catagory: { type: String, required: true},
}, { timestamps: true});

// Create Model of our Schema
const Post = mongoose.model('Post', postSchema);

module.exports = Post;