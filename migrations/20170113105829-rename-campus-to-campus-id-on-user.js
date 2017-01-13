'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.renameColumn('developers', 'campus', 'campusId');
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.renameColumn('developers', 'campusId', 'campus');
  }
};
