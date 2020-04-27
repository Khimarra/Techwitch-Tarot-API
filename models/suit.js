'use strict';
module.exports = (sequelize, DataTypes) => {
  const Suit = sequelize.define('Suit', {
    arcana: DataTypes.STRING,
    suitName: DataTypes.STRING,
    symbol: DataTypes.STRING,
    symbolImg: DataTypes.STRING,
    suitMeaning: DataTypes.STRING,
    suitHistory: DataTypes.STRING
  }, {});
  Suit.associate = function(models) {
    // associations can be defined here
  };
  return Suit;
};