'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
		return queryInterface.addColumn(
      'questions',
      'active',
			{
      	type: Sequelize.BOOLEAN,
				defaultValue: true
			}
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('questions', 'active');
  }
};
