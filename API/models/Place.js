const mongoose = require('mongoose')

const placeschema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    title: String,
    address: String,
    description: String,
    photolink: String,
    photo: [String],
    extrainfo: String,


}) 

const Placeschema = mongoose.model('Place', placeschema)

module.exports = Placeschema