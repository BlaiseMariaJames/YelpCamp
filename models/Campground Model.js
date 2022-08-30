// REQUIRING MONGOOSE
const mongoose = require("mongoose");

// STORING SCHEMA OBJECT INTO A VARIABLE
const Schema = mongoose.Schema;

// DEFINING CAMPGROUND SCHEMA
const CampgroundSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imageURL: {
        type: [String]
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        type: String
    },
    location: {
        type: String,
        required: true
    }
});

// DEFINING CAMPGROUND MODEL
const Campground = mongoose.model('Campground', CampgroundSchema);

// EXPORTING CAMPGROUND MODEL
module.exports = Campground;