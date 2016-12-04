'use strict';
// var User = require('./user.js');

module.exports = function(sequelize, DataTypes) {
  var Ranking = sequelize.define('Ranking', {
    userId: DataTypes.INTEGER,
    developerId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER,
    points: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // User.hasMany(Ranking, { foreignKey: 'userId'});        
      }
    }
  });
  return Ranking;
};