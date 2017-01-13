'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    var options = { raw: true };

    return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0', options)
      .then(function () {
        queryInterface.addColumn('users', 'campusId', {
          type: Sequelize.INTEGER,
          allowNull: Sequelize,
          defaultValue: 0,
          references: {
            model: 'campuses',
            key: 'id'
          }
        });
      });
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.removeColumn('users', 'campusId');
  }
};
