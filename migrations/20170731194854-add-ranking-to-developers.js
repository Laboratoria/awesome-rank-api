'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
		return queryInterface.addColumn(
      'developers',
      'ranking',
			{
      	type: Sequelize.INTEGER
			}
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('developers', 'ranking');
  }
};
