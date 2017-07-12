'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => 
        queryInterface.createTable('Members', {
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
            member: {
                allowNull: false,
                type: Sequelize.STRING
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
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable("Members"),
};