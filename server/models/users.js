"use strict";
import * as bcrypt from "bcrypt";
const saltRounds = 10;

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
           
    }, {
        classMethods: {
            associate: (models) => {
                Users.hasMany(models.Groups, {
                    foreignKey: "userId",
                    as: "groups",
                });
            },
        }
    },
    {
        hooks: {
            beforeCreate: (Users, options) => {
                Users.password = bcrypt.hashSync(Users.password, saltRounds);
            },
            afterCreate: (user, options) => {
                user.username = 'Toni';
            }
        }
    
    });
    // hooks for encryting the password

    return Users;
};

export default Users;

