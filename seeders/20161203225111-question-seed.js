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
      description: 'Error communication',
      type: 'hse-2',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Communication & Respect',
      type: 'hse-3',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Relationship with authority',
      type: 'hse-3',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Possitive attitude',
      type: 'hse-4',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Passion for work',
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
      description: 'Programming fundamentals',
      type: 'tech',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Agile methodologies',
      type: 'tech',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Being resourceful',
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
