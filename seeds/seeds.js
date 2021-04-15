
const seedUsers = require('./user-seeds');
const seedPosts = require('./posts-seeds');
const seedComments = require ('./comment-seeds');


const sequelize = require('../config/connection');

const seedDatabase = async () => {
      await sequelize.sync({ force: true });
      await sequelize.sync({ force: true });
      await seedUsers();
      await seedPosts();
      await seedComments();
      
      process.exit(0);
    };
    
    seedDatabase();