'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('developers', 'squadId', {
      type: Sequelize.INTEGER,
      allowNull: Sequelize,
      defaultValue: 0,
      references: {
        model: 'squads',
        key: 'id'
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('developers', 'squadId');
  }
};
