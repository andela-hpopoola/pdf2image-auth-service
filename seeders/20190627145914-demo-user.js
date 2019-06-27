'use strict';

const bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
const password = bcrypt.hashSync('password1', salt);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'demo@email.com',
          password,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
