'use strict';
module.exports = function(sequelize, DataTypes) {
  var Developer = sequelize.define('Developer', {
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    age: DataTypes.INTEGER,
    campusId: DataTypes.STRING,
    photoUrl: DataTypes.STRING,
    title: DataTypes.STRING,
    captainLink: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.Squad.hasMany(Developer, { constraints: true }); 
      }
    }
  });
  return Developer;
};