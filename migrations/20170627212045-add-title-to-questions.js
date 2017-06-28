'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('questions', 'title', {
			type: Sequelize.STRING,
			defaultValue: ''
		});
  },

  down: function (queryInterface, Sequelize) {
		return queryInterface.removeColumn('title');
  }
};
