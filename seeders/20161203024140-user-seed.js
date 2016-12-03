'use strict';

var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'laboraotria';

function encrypt(text){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      name: 'Lab',
      lastname: 'Internacional',
      username: 'awesome',
      company: 'Laboratoria',
      password: encrypt('laboratoria'),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
