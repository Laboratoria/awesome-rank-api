'use strict';
module.exports = function(sequelize, DataTypes) {
  var Ranking = sequelize.define('Ranking', {
    points: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.User.hasMany(Ranking, { constraints: true });
        models.Developer.hasMany(Ranking, { constraints: true }); 
        models.Question.hasMany(Ranking, { constraints: true });       
      }
    }
  });
  return Ranking;
};