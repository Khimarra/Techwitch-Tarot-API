'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Suits', [
      {
        arcana: 'Major',
        suitName: 'Trump',
        symbol: '',
        symbolImg: '',
        suitMeaning: 'Information about the meaning of the Major Arcana here... if there is any',
        suitHistory: 'History of the Major Arcana here'
      },
      {
        arcana: 'Minor',
        suitName: 'Cups',
        symbol: '',
        symbolImg: '',
        suitMeaning: 'Information about the meaning of Cups here',
        suitHistory: 'History of Cups here'
      },
      {
        arcana: 'Minor',
        suitName: 'Pentacles',
        symbol: '',
        symbolImg: '',
        suitMeaning: 'Information about the meaning of Pentacles here',
        suitHistory: 'History of Pentacles here'
      },
      {
        arcana: 'Minor',
        suitName: 'Swords',
        symbol: '',
        symbolImg: '',
        suitMeaning: 'Information about the meaning of Swords here',
        suitHistory: 'History of Swords here'
      },
      {
        arcana: 'Minor',
        suitName: 'Wands',
        symbol: '',
        symbolImg: '',
        suitMeaning: 'Information about the meaning of Wands here',
        suitHistory: 'History of Wands here'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Suits', null, {});
  }
};
