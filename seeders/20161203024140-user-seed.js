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
    }, {
      name: 'Banco',
      lastname: 'Credito',
      username: 'bcp',
      company: 'BCP',
      password: encrypt('bcp'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Empresa',
      lastname: 'GMD',
      username: 'gmd',
      company: 'GMD',
      password: encrypt('gmd'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Empresa',
      lastname: 'Tekton Labs',
      username: 'tekton',
      company: 'Tekton',
      password: encrypt('tekton'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Ministerio',
      lastname: 'Produccion',
      username: 'minproduccion',
      company: 'MinProduccion',
      password: encrypt('minproduccion'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Empresa',
      lastname: 'Thoughtworks',
      username: 'thoughtworks',
      company: 'Thoughtworks',
      password: encrypt('thoughtworks'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Banco',
      lastname: 'Scotiabank',
      username: 'scotiabank',
      company: 'Scotiabank',
      password: encrypt('scotiabank'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Empresa',
      lastname: 'Urbaner',
      username: 'urbaner',
      company: 'Urbaner',
      password: encrypt('urbaner'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Empresa',
      lastname: 'Lyft',
      username: 'lyft',
      company: 'Lyft',
      password: encrypt('lyft'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Empresa',
      lastname: 'Globant',
      username: 'globant',
      company: 'Globant',
      password: encrypt('globant'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Empresa',
      lastname: 'Cignum',
      username: 'cignum',
      company: 'Cignum',
      password: encrypt('cignum'),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
