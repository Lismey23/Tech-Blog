const { Post } = require('../models');
const postData = [{
    title: "Techdirt",
    content: "Reports on technology's legal challenges and related business and economic policy issues, in context of the digital revolution. It focuses on intellectual property, patent, information privacy and copyright reform in particular.",
    user_id:1
},
{
    title: "Stratechery",
    content: 'Provides analysis of the strategy and business side of technology and media, and the impact of technology on society. Weekly Articles are free, while three daily updates per week are provided for subscribers only.',
    user_id:2
},
{
    title: "Tech in Asia",
    content: 'Tech in Asia is a media, events, and jobs platform on a mission to build and serve Asia’s tech and startup community. On the website users can keep abreast of the latest news, share your own thoughts, and find talent or jobs best suited to their needs.',
    user_id:3
}];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
