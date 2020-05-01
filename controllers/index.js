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
        const suit = await Suit.findOne({
            where: { id: id }
        })
        if (suit) {
            return res.status(200).json({ suit })
        }
        return res.status(404).send('That suit does not exist.')
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

const getCardById = async (req, res) => {
    try {
        const { id } = req.params
        const card = await Card.findOne({
            where: { id: id }
        })
        if (card) {
            return res.status(200).json({ card })
        }
    } catch (err) {
        return res.status(500).sned(err.message)
    }
}

const getAllCardsBySuit = async (req, res) => {
    try {
        const suit = await Suit.findByPk(rec.params.id, {
            include: [
                { model: card }
            ]
        })
        return res.status(200).json({ suit })
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

const getAllCardsByValue = async (req, res) => {
    try {
        const { value } = req.params
        const card = await Card.findAll({
            where: {
                value: value
            }
        })
        if (card) {
            return res.status(200).json({ card })
        }
    } catch (err) {
        return res.status()
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
