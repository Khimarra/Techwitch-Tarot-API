'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Suits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      arcana: {
        type: Sequelize.STRING
      },
      suitName: {
        type: Sequelize.STRING
      },
      symbol: {
        type: Sequelize.STRING
      },
      symbolImg: {
        type: Sequelize.STRING
      },
      suitMeaning: {
        type: Sequelize.STRING
      },
      suitHistory: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Suits');
  }
};