"use strict";
module.exports = (sequelize, DataTypes)=>  {
    const Messages = sequelize.define("Messages", {
        groupId: DataTypes.INTEGER,
        message: DataTypes.TEXT
    }, {
        classMethods: {
            associate: (models) => {
                // associations can be defined here
                Messages.belongsTo(models.Groups, {
                    foreignKey: "groupId",
                    onDelete: "CASCADE",
                });
            }
        }
    });
    return Messages;
};