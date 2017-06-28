'use strict';
module.exports = function(sequelize, DataTypes) {
  var Squad = sequelize.define('Squad', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
				models.User.hasOne(Squad);
      }
    }
  });
  return Squad;
};
