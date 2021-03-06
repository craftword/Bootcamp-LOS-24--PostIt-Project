"use strict";

const Users = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fullname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true, 
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: false,
        }
           
    }, 
    {
        classMethods: {
            associate: (models) => {
                Users.hasMany(models.Groups, {
                    foreignKey: "userId",
                    as: "groups",
                });
            },
        }
    });
    

    return Users;
};

export default Users;

