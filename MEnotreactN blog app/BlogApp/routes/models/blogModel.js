const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    date: Date,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model("Blog",blogSchema)