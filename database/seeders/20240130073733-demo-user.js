'use strict';
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let users = [];
    let salt = bcrypt.genSaltSync(10);
    users.push({
      name: "admin Project",
      email: "admin@gmail.com",
      password: bcrypt.hashSync("rahasia", salt),
    });
    users.push({
      name: "member Project",
      email: "member@gmail.com",
      password: bcrypt.hashSync("rahasia", salt),
    });
    return queryInterface.bulkInsert('Users', users, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', null, {});
  }
};
