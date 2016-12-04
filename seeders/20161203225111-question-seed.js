'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('questions', [{
      description: 'Emotional status',
      type: 'hse-1',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Challenge taker',
      type: 'hse-1',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Adaptability',
      type: 'hse-1',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Thinking out loud',
      type: 'hse-2',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Listening',
      type: 'hse-2',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Participation',
      type: 'hse-2',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Error Communication',
      type: 'hse-2',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Communication & Respect',
      type: 'hse-3',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Leadership',
      type: 'hse-3',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Possitive actitude',
      type: 'hse-4',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Work passion',
      type: 'hse-4',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Version Control System',
      type: 'tech',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Techie language',
      type: 'tech',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Programming Fundamentals',
      type: 'tech',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Agile Knowledge',
      type: 'tech',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Being Resourceful',
      type: 'tech',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Look & feel / Usability / UX',
      type: 'tech',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('questions', null, {});
  }
};
