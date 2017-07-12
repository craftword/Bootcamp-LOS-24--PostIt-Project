"use strict";
module.exports = (sequelize, DataTypes)=> {
    const Members = sequelize.define("Members", {
        groupId: DataTypes.INTEGER,
        member: DataTypes.STRING
    }, {
        classMethods: {
            associate: (models) => {
                // associations can be defined here
                Members.belongsTo(models.Groups, {
                    foreignKey: "groupId",
                    onDelete: "CASCADE",
                });
            }
        }
    });
    return Members;
};