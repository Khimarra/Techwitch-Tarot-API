const { Suit } = require("../models")
const { Card } = require("../models")

const getAllSuits = async (req, res) => {
    try {
        const suits = await Suit.findAll()
        return res.status(200).json({ suits })        
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

const getAllCards = async (req, res) => {
    try {
        const cards = await Card.findAll()
        return res.status(200).json({ cards })
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

const getSuitById = async (req, res) => {
    try {
        const { id } = req.params
        
    }
}

module.exports = {
    getAllSuits,
    getAllCards,
    getSuitById,
    getCardById,
    getAllCardsBySuit,
    getAllCardsByValue
}
