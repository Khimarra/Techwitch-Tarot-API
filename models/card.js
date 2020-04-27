'use strict';
module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    suitId: DataTypes.INTEGER,
    cardName: DataTypes.STRING,
    rwsImg: DataTypes.STRING,
    rwsBackImg: DataTypes.STRING,
    uprightRead: DataTypes.STRING,
    reverseRead: DataTypes.STRING,
    meaning: DataTypes.STRING,
    history: DataTypes.STRING,
    description: DataTypes.STRING,
    value: DataTypes.INTEGER,
    numerology: DataTypes.STRING
  }, {});
  Card.associate = function(models) {
    // associations can be defined here
  };
  return Card;
};