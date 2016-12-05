'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('developers', [{
      name: 'Daniela',
      lastname: 'Mora',
      age: 26,
      campus: 'Santiago de Chile',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/dana.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Karen',
      lastname: 'Orozco',
      age: 27,
      campus: 'Ciudad de México',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/karen.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Diana',
      lastname: 'Navarro',
      age: 19,
      campus: 'Lima',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/diana.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Paola',
      lastname: 'Ortiz de Zevallos',
      age: 25,
      campus: 'Lima',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/paola.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Maryori',
      lastname: 'Quiroz',
      age: 19,
      campus: 'Lima',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/maryori.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Susana',
      lastname: 'Opazo',
      age: 25,
      campus: 'Santiago de Chile',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/su.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Alexandra',
      lastname: 'Neira',
      age: 30,
      campus: 'Santiago de Chile',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/alexandra.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Elisa',
      lastname: 'Martinez',
      age: 25,
      campus: 'Ciudad de México',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/elisa.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Maciel',
      lastname: 'Porraz',
      age: 27,
      campus: 'Ciudad de México',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/maciel.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Teresa',
      lastname: 'Lara',
      age: null,
      campus: 'Lima',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/teresa.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Sheila',
      lastname: 'Acuña',
      age: null,
      campus: 'Lima',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/sheila.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Evelyn',
      lastname: 'Farfan',
      age: null,
      campus: 'Lima',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/evelyn.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Sandy',
      lastname: 'Ciquero',
      age: null,
      campus: 'Lima',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/sandy.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Cilene',
      lastname: 'De la Cruz',
      age: null,
      campus: 'Lima',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/cilene.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Karol',
      lastname: 'Orrillo',
      age: null,
      campus: 'Lima',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/karol.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Janet',
      lastname: 'Quispe',
      age: null,
      campus: 'Lima',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/janet.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Yeiny',
      lastname: 'Gonzalez',
      age: null,
      campus: 'Lima',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/yeiny.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Christy',
      lastname: 'Castro',
      age: null,
      campus: 'Lima',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/christy.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Sthefany',
      lastname: 'Floriano',
      age: null,
      campus: 'Lima',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/sthefany.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Michelle',
      lastname: 'Seguil',
      age: null,
      campus: 'Lima',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/michelle.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Liz',
      lastname: 'Ruelas',
      age: null,
      campus: 'Lima',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/liz.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Alexandra',
      lastname: 'Fernandez',
      age: null,
      campus: 'Lima',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/alexandra_f.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Sara',
      lastname: 'Castillo',
      age: null,
      campus: 'Lima',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/sara.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Jazmine',
      lastname: 'Angoma',
      age: null,
      campus: 'Lima',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/jazmine.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Sammia',
      lastname: 'Zubizarreta',
      age: null,
      campus: 'Lima',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/sammia.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Milagros',
      lastname: 'Quispe',
      age: null,
      campus: 'Lima',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/milagros.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'María de Fátima',
      lastname: 'Jácobo',
      age: null,
      campus: 'Lima',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/fatima.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Andrea',
      lastname: 'Maucaylli',
      age: null,
      campus: 'Lima',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/andrea_m.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Andrea',
      lastname: 'Cabrera',
      age: null,
      campus: 'Lima',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/andrea_c.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Jennifer',
      lastname: 'Jara',
      age: null,
      campus: 'Lima',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/jennifer.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Sofia',
      lastname: 'Caballero',
      age: null,
      campus: 'Lima',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/sofia.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Anabel',
      lastname: 'Espinal',
      age: null,
      campus: 'Lima',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/anabel.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Paola',
      lastname: 'Quispe',
      age: null,
      campus: 'Lima',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/paola_q.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Lezmit',
      lastname: 'Galarza',
      age: null,
      campus: 'Lima',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/lezmit.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Melissa',
      lastname: 'Berrocal',
      age: null,
      campus: 'Lima',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/melissa.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Lilibet',
      lastname: 'Hualtibamba',
      age: null,
      campus: 'Lima',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/lili.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Sheyla',
      lastname: 'Breña',
      age: null,
      campus: 'Lima',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/sheyla.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Carol',
      lastname: 'Juarez',
      age: null,
      campus: 'Lima',
      photoUrl: 'https://awesome-rank.herokuapp.com/img/developers/carol.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('developers', null, {});
  }
};
