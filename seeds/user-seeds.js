const { User } = require ('../models');
const userData = [{
    username = 'Lis',
    password = 'nopassword'
},
{
    username = 'Marlys',
    password = 'marlysco'
},
{
    username = 'Eli',
    password = 'eliruiz'
}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
