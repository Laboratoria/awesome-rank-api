'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('developers', [{
      name: 'Daniela',
      lastname: 'Mora',
      age: 26,
      campus: 'Santiago de Chile',
      photoUrl: 'http://awesome-rank.herokuapp.com/img/girls/dana.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Karen',
      lastname: 'Orozco',
      age: 27,
      campus: 'Ciudad de México',
      photoUrl: 'http://awesome-rank.herokuapp.com/img/girls/karen.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Diana',
      lastname: 'Navarro',
      age: 19,
      campus: 'Lima',
      photoUrl: 'http://awesome-rank.herokuapp.com/img/girls/diana.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Paola',
      lastname: 'Ortiz de Zevallos',
      age: 25,
      campus: 'Lima',
      photoUrl: 'http://awesome-rank.herokuapp.com/img/girls/paola.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Maryori',
      lastname: 'Quiroz',
      age: 19,
      campus: 'Lima',
      photoUrl: 'http://awesome-rank.herokuapp.com/img/girls/maryori.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Susana',
      lastname: 'Opazo',
      age: 25,
      campus: 'Santiago de Chile',
      photoUrl: 'http://awesome-rank.herokuapp.com/img/girls/su.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Alexandra',
      lastname: 'Neira',
      age: 30,
      campus: 'Santiago de Chile',
      photoUrl: 'http://awesome-rank.herokuapp.com/img/girls/alexandra.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Elisa',
      lastname: 'Martinez',
      age: 25,
      campus: 'Ciudad de México',
      photoUrl: 'http://awesome-rank.herokuapp.com/img/girls/elisa.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Maciel',
      lastname: 'Porraz',
      age: 27,
      campus: 'Ciudad de México',
      photoUrl: 'http://awesome-rank.herokuapp.com/img/girls/maciel.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('developers', null, {});
  }
};
