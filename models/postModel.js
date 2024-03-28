const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const postSchema = new mongoose.Schema({
  post: {
    type: String,
    required: [true, 'Please enter post text'],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Review must belong to a user'],
  },
  media: [String],
  updatedAt: Date,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
