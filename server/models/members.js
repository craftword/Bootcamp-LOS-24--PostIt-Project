'use strict';
module.exports = function(sequelize, DataTypes) {
  var Members = sequelize.define('Members', {
    groupId: DataTypes.INTEGER,
    member: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Members;
};