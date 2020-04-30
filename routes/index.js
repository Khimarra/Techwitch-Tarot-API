// definitely need get routes. not sure if i want put post or delete, it depends on how i want to deal with changing things in the future.

// figure out why i need a password in config.json... it's REALLY annoying. possibly just need to redo the database after removing those lines?

const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

router.get('/suits', controllers.getAllSuits)
router.get('/cards', controllers.getAllCards)
router.get('/suits/:id', controllers.getSuitById)
router.get('/cards/:id', controllers.getCardById)
router.get('/suits/:id/cards', controllers.getAllCardsBySuit)
router.get('/cards/value', controllers.getAllCardsByValue)

module.exports = router
