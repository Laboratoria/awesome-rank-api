'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    company: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        models.Campus.hasMany(User, { constraints: true });
      }
    }
  });
  return User;
};