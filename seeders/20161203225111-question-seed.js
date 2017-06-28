'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('questions', [{
      title: 'Emotional status',
			description: 'Emotional status',
      type: 'hse-1',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Challenge taker',
			description: 'Challenge taker',
      type: 'hse-1',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Adaptability',
			description: 'Adaptability',
      type: 'hse-1',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Thinking out loud',
			description: 'Thinking out loud',
      type: 'hse-2',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Listening',
			description: 'Listening',
      type: 'hse-2',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Participation',
			description: 'Participation',
      type: 'hse-2',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Error communication',
			description: 'Error communication',
      type: 'hse-2',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Communication & Respect',
			description: 'Communication & Respect',
      type: 'hse-3',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Relationship with authority',
			description: 'Relationship with authority',
      type: 'hse-3',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Possitive attitude',
			description: 'Possitive attitude',
      type: 'hse-4',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Passion for work',
			description: 'Passion for work',
      type: 'hse-4',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Version Control System',
			description: 'Version Control System',
      type: 'tech',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Techie language',
			description: 'Techie language',
      type: 'tech',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Programming fundamentals',
			description: 'Programming fundamentals',
      type: 'tech',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Agile methodologies',
			description: 'Agile methodologies',
      type: 'tech',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Being resourceful',
			description: 'Being resourceful',
      type: 'tech',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Look & feel / Usability / UX',
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
