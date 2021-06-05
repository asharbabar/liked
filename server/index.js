const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


require('./models/PostSchema');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }).then(res => console.log('db connected'));

const PORT = process.env.PORT || 3001;

const app = express();
const Posts = mongoose.model('likedposts');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api/all-posts", async (req, res) => {
  try {
    const findAllPosts = await Posts.find({});
    res.send({ status: 200, posts: findAllPosts });
  } catch (error) {
    res.status(400).send({ error: '⚠️ Something went wrong!!!'})
  }
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});