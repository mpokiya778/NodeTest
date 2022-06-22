var mongoose = require('mongoose');

var moviesch = mongoose.Schema({
    name:String,
    rating:Number
})

module.exports = mongoose.model("movies",moviesch);