'use strict';
const Groups = (sequelize, DataTypes) => {
    const Groups = sequelize.define('Groups', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
          
    }, 
    {
        associate: (models) => {
            Groups.belongsTo(models.Users, {
                foreignKey: 'userId',
                onDelete: 'CASCADE',
            });
        },
    });
    
    return Groups;
};

export default Groups;