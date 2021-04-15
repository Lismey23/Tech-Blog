const { text } = require('express');
const { Comment } = require('../models');
const commentData = [{
    comment_text:'Best tech blog ever !!',
    user_id:1,
    post_id:1
},
{
    comment_text:'Amazing content',
    user_id:2,
    post_id:2
},
{
    comment_text:'Always updated with the best news of the tech world',
    user_id:3,
    post_id:3

}];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;