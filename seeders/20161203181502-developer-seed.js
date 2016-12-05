'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('developers', [{
      name: 'Daniela',
      lastname: 'Mora',
      age: 26,
      campus: 'Santiago de Chile',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/girls/dana.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Karen',
      lastname: 'Orozco',
      age: 27,
      campus: 'Ciudad de México',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/girls/karen.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Diana',
      lastname: 'Navarro',
      age: 19,
      campus: 'Lima',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/girls/diana.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Paola',
      lastname: 'Ortiz de Zevallos',
      age: 25,
      campus: 'Lima',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/girls/paola.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Maryori',
      lastname: 'Quiroz',
      age: 19,
      campus: 'Lima',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/girls/maryori.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Susana',
      lastname: 'Opazo',
      age: 25,
      campus: 'Santiago de Chile',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/girls/su.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Alexandra',
      lastname: 'Neira',
      age: 30,
      campus: 'Santiago de Chile',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/girls/alexandra.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Elisa',
      lastname: 'Martinez',
      age: 25,
      campus: 'Ciudad de México',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/girls/elisa.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Maciel',
      lastname: 'Porraz',
      age: 27,
      campus: 'Ciudad de México',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/girls/maciel.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Teresa',
      lastname: 'Lara',
      age: null,
      campus: 'Lima',
      photoUrl: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Sheila',
      lastname: 'Acuña',
      age: null,
      campus: 'Lima',
      photoUrl: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Evelyn',
      lastname: 'Farfan',
      age: null,
      campus: 'Lima',
      photoUrl: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Sandy',
      lastname: 'Ciquero',
      age: null,
      campus: 'Lima',
      photoUrl: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Cilene',
      lastname: 'De la Cruz',
      age: null,
      campus: 'Lima',
      photoUrl: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Karol',
      lastname: 'Orrillo',
      age: null,
      campus: 'Lima',
      photoUrl: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Janet',
      lastname: 'Quispe',
      age: null,
      campus: 'Lima',
      photoUrl: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Yeiny',
      lastname: 'Gonzalez',
      age: null,
      campus: 'Lima',
      photoUrl: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Christy',
      lastname: 'Castro',
      age: null,
      campus: 'Lima',
      photoUrl: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Sthefany',
      lastname: 'Floriano',
      age: null,
      campus: 'Lima',
      photoUrl: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Michelle',
      lastname: 'Seguil',
      age: null,
      campus: 'Lima',
      photoUrl: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Liz',
      lastname: 'Ruelas',
      age: null,
      campus: 'Lima',
      photoUrl: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Alexandra',
      lastname: 'Fernandez',
      age: null,
      campus: 'Lima',
      photoUrl: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Sara',
      lastname: 'Castillo',
      age: null,
      campus: 'Lima',
      photoUrl: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Jazmine',
      lastname: 'Angoma',
      age: null,
      campus: 'Lima',
      photoUrl: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Sammia',
      lastname: 'Zubizarreta',
      age: null,
      campus: 'Lima',
      photoUrl: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Milagros',
      lastname: 'Quispe',
      age: null,
      campus: 'Lima',
      photoUrl: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'María de Fátima',
      lastname: 'Jácobo',
      age: null,
      campus: 'Lima',
      photoUrl: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Andrea',
      lastname: 'Maucaylli',
      age: null,
      campus: 'Lima',
      photoUrl: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Andrea',
      lastname: 'Cabrera',
      age: null,
      campus: 'Lima',
      photoUrl: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Jennifer',
      lastname: 'Jara',
      age: null,
      campus: 'Lima',
      photoUrl: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Sofia',
      lastname: 'Caballero',
      age: null,
      campus: 'Lima',
      photoUrl: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Anabel',
      lastname: 'Espinal',
      age: null,
      campus: 'Lima',
      photoUrl: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Paola',
      lastname: 'Quispe',
      age: null,
      campus: 'Lima',
      photoUrl: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Lezmit',
      lastname: 'Galarza',
      age: null,
      campus: 'Lima',
      photoUrl: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Melissa',
      lastname: 'Berrocal',
      age: null,
      campus: 'Lima',
      photoUrl: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Lilibet',
      lastname: 'Hualtibamba',
      age: null,
      campus: 'Lima',
      photoUrl: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Sheyla',
      lastname: 'Breña',
      age: null,
      campus: 'Lima',
      photoUrl: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Carol',
      lastname: 'Juarez',
      age: null,
      campus: 'Lima',
      photoUrl: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Maciel',
      lastname: 'Porraz',
      age: null,
      campus: 'Lima',
      photoUrl: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Maciel',
      lastname: 'Porraz',
      age: null,
      campus: 'Lima',
      photoUrl: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Maciel',
      lastname: 'Porraz',
      age: null,
      campus: 'Lima',
      photoUrl: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Maciel',
      lastname: 'Porraz',
      age: null,
      campus: 'Lima',
      photoUrl: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Maciel',
      lastname: 'Porraz',
      age: null,
      campus: 'Lima',
      photoUrl: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('developers', null, {});
  }
};
