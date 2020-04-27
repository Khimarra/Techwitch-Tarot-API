'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Cards', [
      {
        suitId: 1,
        cardName: 'First Card',
        rwsImg: 'randomimg.png',
        rwsBackImg: 'backimg.png',
        uprightRead: 'basic reading upright',
        reverseRead: 'basic reading reversed',
        meaning: 'full interpretation',
        history: 'history of specific card',
        description: 'verbal description of imagery',
        value: 1,
        numerology: 'info about what the card means in numerology',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        suitId: 1,
        cardName: 'Second Card',
        rwsImg: 'randomimg.png',
        rwsBackImg: 'backimg.png',
        uprightRead: 'basic reading upright',
        reverseRead: 'basic reading reversed',
        meaning: 'full interpretation',
        history: 'history of specific card',
        description: 'verbal description of imagery',
        value: 1,
        numerology: 'info about what the card means in numerology',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        suitId: 1,
        cardName: 'Third Card',
        rwsImg: 'randomimg.png',
        rwsBackImg: 'backimg.png',
        uprightRead: 'basic reading upright',
        reverseRead: 'basic reading reversed',
        meaning: 'full interpretation',
        history: 'history of specific card',
        description: 'verbal description of imagery',
        value: 1,
        numerology: 'info about what the card means in numerology',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        suitId: 2,
        cardName: 'Fourth Card',
        rwsImg: 'randomimg.png',
        rwsBackImg: 'backimg.png',
        uprightRead: 'basic reading upright',
        reverseRead: 'basic reading reversed',
        meaning: 'full interpretation',
        history: 'history of specific card',
        description: 'verbal description of imagery',
        value: 1,
        numerology: 'info about what the card means in numerology',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Cards', null, {});
  }
};
