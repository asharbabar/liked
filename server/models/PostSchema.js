const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  "picture": String,
  "username": String,
  "post_url": String,
  "title": String,
  "price": Number,
  "likes": Number,
  "description": String,
  "tags": String,
  "liked": Boolean
});

mongoose.model('likedposts', postSchema);