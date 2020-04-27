'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      suitId: {
        type: Sequelize.INTEGER
      },
      cardName: {
        type: Sequelize.STRING
      },
      rwsImg: {
        type: Sequelize.STRING
      },
      rwsBackImg: {
        type: Sequelize.STRING
      },
      uprightRead: {
        type: Sequelize.STRING
      },
      reverseRead: {
        type: Sequelize.STRING
      },
      meaning: {
        type: Sequelize.STRING
      },
      history: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.INTEGER
      },
      numerology: {
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
    return queryInterface.dropTable('Cards');
  }
};