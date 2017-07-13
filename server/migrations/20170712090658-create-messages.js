"use strict";
module.exports = {
    up: (queryInterface, Sequelize) =>  
        queryInterface.createTable("Messages", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            groupId: {
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                references: {
                    model: "Groups",
                    key: "id",
                    as: "groupId",
                },
            },
            message: {
                allowNull: false,
                type: Sequelize.TEXT
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
        }),
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable("Messages"),
};