/* eslint-disable no-undef */
// models/Suggestion.js

// const mongoose = require('mongoose');

// const suggestionSchema = new mongoose.Schema({
//   placeName: String,
//   location: String,
//   placeType: String,
//   photos: [String], // Array of image URLs
//   description: String,
// });

// const Suggestion = mongoose.model('Suggestion', suggestionSchema);

// module.exports = Suggestion;

const mongoose=require('mongoose');
const SuggestionSchema=new mongoose.Schema({
    placeName: String,
  location: String,
  placeType: String,
  photos: [String], // Array of image URLs
  description: String,
})
const SuggestionModel=mongoose.model("suggests",SuggestionSchema)
module.exports=SuggestionModel