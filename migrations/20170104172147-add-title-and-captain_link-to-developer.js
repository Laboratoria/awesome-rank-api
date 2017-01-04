'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'developers',
      'title',
      Sequelize.STRING
    ).then(function () {
      queryInterface.addColumn(
        'developers',
        'captainLink',
        Sequelize.STRING
      );
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('developers', 'title')
      .then(function () {
        queryInterface.removeColumn('developers', 'captainLink');
      });
  }
};
